#pragma strict
var drop = -60;
private var isRestarted = false;

function Start () {

}

function Update () {
    var rigidbody : Rigidbody2D;

    rigidbody = GetComponent.<Rigidbody2D>();
    if (transform.position.y < drop){
        Death();
    }
}

function Death () {
    Debug.Log ("hej");
    isRestarted = true;
    Application.LoadLevel("level1");
}
