#pragma strict
var drop = -60;
private var isRestarted = false;

function Start () {

}

function Update () {
    if (transform.position.y < drop){
        Death();
    }
}

function Death () {
    Debug.Log ("hej");
    isRestarted = true;
    Application.LoadLevel("level1");
}
