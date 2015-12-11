#pragma strict

var speed = 10;
var jumpHeight = 8;
var canJump = true;
var numjumps = 0;
var maxjumps = 1;

var hit : AudioClip;
var volume :float = 1;
var distToGround : float;

function Start ()
{
       //getting distans from ground
    //distToGround = GetComponent.<Collider>().bounds.extents.y;
}

function IsGrounded() : boolean
{
    return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.W) && canJump)
	{
	    GetComponent.<Rigidbody2D>().velocity = new Vector2 (0, jumpHeight);
	    //++numjumps;
	    canJump = false;
	}
	if (Input.GetKey(KeyCode.A))
	{
	    GetComponent.<Rigidbody2D>().velocity = new Vector2 (-speed, 0);
	}
	if (Input.GetKeyDown(KeyCode.D))
	{
	    GetComponent.<Rigidbody2D>().velocity = new Vector2 (speed, 0);
	}
}

function onCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Ground")) {
        canJump = true;
    }
        Debug.Log (numjumps);
}



/*function OnCollisionEnter () 
{
    GetComponent.<AudioSource>().clip = hit;
    //Debug.Log (-GetComponent.<Rigidbody>().velocity.y);
    GetComponent.<AudioSource>().volume = volume;
    GetComponent.<AudioSource>().Play();
}*/
