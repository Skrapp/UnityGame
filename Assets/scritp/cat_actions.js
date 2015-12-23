#pragma strict
var drop = -60;
var AttackArea : GameObject;
private var isRestarted = false;
var clone;
var healthLoss = 0;
var health = 100;
var y = 1;
var x = 2.78;

function Start () {

}

function Update () {
    if (transform.position.y < drop){
        Death();
    }

    if (Input.GetKeyDown(KeyCode.Q)){
        //var clone : ;
        var x = transform.position.x + x;
        var y = transform.position.y + y;
        clone = Instantiate(AttackArea, new Vector2 (x, y),  Quaternion.identity);
        //var lenght = GameObject.Find("AttackArea").GetComponent.<Animation>().clip.length("attack");
        Destroy (clone, 0.30 /*GameObject.Find("AttackArea").GetComponent.<AnimationClip>().length("attack")*/);
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
