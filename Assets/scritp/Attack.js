#pragma strict
//var AttackArea: Rigidbody;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (coll : Collider2D) {
   /* if (coll.gameObject.CompareTag("Enemy")) {
        Destroy(coll.gameObject);
        Debug.Log ("Die");
    }*/
}

function AttackButtonPressed () {
   /* var clone : Rigidbody;
    clone = Instantiate(AttackArea);
			
    // Give the cloned object an initial velocity along the current 
    // object's Z axis
    //clone.velocity = transform.TransformDirection (Vector3.forward * 10);
    /*var pos = GameObject.Find("Cat").transform.position;
    Instantiate(Attack, pos);
    Debug.Log (pos);*/
}