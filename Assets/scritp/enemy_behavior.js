#pragma strict
var y;
var speed = -10;
var facingRight = true;
var bounceX = 20f;

function Start () {

}

function Update () {
}

function OnCollisionStay2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("EnemyDie")) {
        Debug.Log ("die potato");
    }
    /*if (coll.gameObject.CompareTag("Player")) {
        if (facingRight){
        bounceX *= -1;
        }
        else {

        }
    }*/
}

/*function Flip () {
    var flipScale : Vector3;
    var rigidbody : Rigidbody2D;

    speed *= -1;
    
    rigidbody = GetComponent.<Rigidbody2D>();

    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1;

    rigidbody.transform.localScale = flipScale;

    transform.position.x += speed/10;
}*/