#pragma strict
var y;
var speed = -10;

function Start () {

}

function Update () {
   /* y = GetComponent.<Rigidbody2D>().velocity.y;
    GetComponent.<Rigidbody2D>().velocity = new Vector2 (speed, y);

    if (transform.position.x < GameObject.Find("Left").transform.position.x){
        //Debug.Log ("tja");
        Flip();
    }
    if (transform.position.x > GameObject.Find("Right").transform.position.x ){
        //Debug.Log ("tja1");
        Flip();
    }*/
}

function OnCollisionStay2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("EnemyDie")) {
        Debug.Log ("die potato");
    }
}

function Flip () {
    var flipScale : Vector3;
    var rigidbody : Rigidbody2D;

    speed *= -1;
    
    rigidbody = GetComponent.<Rigidbody2D>();

    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1;

    rigidbody.transform.localScale = flipScale;

    transform.position.x += speed/10;
}