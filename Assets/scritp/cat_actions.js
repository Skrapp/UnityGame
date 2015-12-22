#pragma strict
var drop = -60;
var AttackArea : GameObject;
private var isRestarted = false;
var clone;
var healthLoss = 0;
var health = 100;

function Start () {

}

function Update () {
    if (transform.position.y < drop){
        Death();
    }

    if (Input.GetKeyDown(KeyCode.Q)){
        //var clone : ;
        var x = transform.position.x +  2.79;
        var y = transform.position.y;
        clone = Instantiate(AttackArea, new Vector2 (x, y),  Quaternion.identity);
        Destroy (clone, 1);
    }
}

function LoseHealth (){
    health -= healthLoss;
    Debug.Log (health);
}

function Death () {
    Debug.Log ("hej");
    isRestarted = true;
    Application.LoadLevel("level1");
}
