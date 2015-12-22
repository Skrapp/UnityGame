#pragma strict
var y;
var speed = -10;
var facingRight = true;
var bounceX = 20f;

function Start () {

}

function Update () {
}

function OnTriggerEnter2D (coll : Collider2D) {
    if (coll.gameObject.CompareTag("EnemyDie")) {
        Destroy(transform.root.gameObject);
    }
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