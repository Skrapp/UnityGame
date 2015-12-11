#pragma strict

var target : Transform;
var distance = -10;
var lift = 1.5;
var forward = 30;

function Update () 
{
	transform.position = target.position + Vector3(forward, 0, distance);
	
	transform.LookAt (target);
}