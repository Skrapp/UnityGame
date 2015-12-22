#pragma strict
var speed = 10;
var jumpHeight = 8;
var numJumps = 0;
var maxJumps = 1;
var y; 
var x;
var forceX= 1;
var facingRight = true;
var facingLeft = false;
var cat_actions : cat_actions;  
var thrust = 5000;
var inputY : float;
var enemyScript : enemy_behavior;
var attacked = false;

function Start () {

}

function Update () {
    if (!attacked) {
        if (Input.GetKeyDown(KeyCode.W) && CanJump())
        {
            x = GetComponent.<Rigidbody2D>().velocity.x;
            GetComponent.<Rigidbody2D>().velocity = new Vector2 (x, jumpHeight);
            ++numJumps;
        }
        if (Input.GetKey(KeyCode.A))
        {
            y = GetComponent.<Rigidbody2D>().velocity.y;
            GetComponent.<Rigidbody2D>().velocity = new Vector2 (-speed, y);

            if (facingRight) {
                Flip();
            } 
        }
        if (Input.GetKey(KeyCode.D))
        {
            y = GetComponent.<Rigidbody2D>().velocity.y;
            GetComponent.<Rigidbody2D>().velocity = new Vector2 (speed, y);

            if (!facingRight) {
                Flip();
            }        
        }
    }
}

function OnCollisionStay2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Ground")) {
        numJumps = 0;
    }
   
    if (coll.gameObject.CompareTag("Enemy")) {
        attacked = true;
        //lose health
        cat_actions.healthLoss = 10; // should be a variable on the thing you hit
        cat_actions.LoseHealth();

        GetComponent.<Rigidbody2D>().velocity.y = 30f;
        GetComponent.<Rigidbody2D>().velocity.x = enemyScript.bounceX;
        yield WaitForSeconds (0.7);
        attacked = false;
    }

    if (coll.gameObject.CompareTag("EnemyHead")) {
        
    }

}

function CanJump () {
    return numJumps < maxJumps;
}

function Flip () {
    var flipScale : Vector3;
    var rigidbody : Rigidbody2D;

    rigidbody = GetComponent.<Rigidbody2D>();

    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1;

    rigidbody.transform.localScale = flipScale;

    facingRight =!facingRight;
}
