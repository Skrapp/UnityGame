#pragma strict
var speed = -10;
var facingRight = false;

function Start () {

}

function Update () {
    GetComponent.<Rigidbody2D>().velocity = new Vector2 (speed, 0);
}