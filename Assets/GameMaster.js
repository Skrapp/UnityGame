#pragma strict

static var currentScore :int = 0;
var test = 0;
var offsetY : float = 40;
var sizeX : float = 100;
var sizeY : float = 40;
var musicOn = 0;

var heart : Texture;
var musicPrefab : Transform;

function Start () 
{
	currentScore = 0;

	/*if (!GameObject.FindGameObjectWithTag("MM"))
	{
	    var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
	    mManager.name = musicPrefab.name;
	    DontDestroyOnLoad(mManager);
	}*/
}

function OnGUI () 
{
    for ()   // for funktion för att göra alla antal hjärtan
    GUI.DrawTexture(Rect(10,10,30,30), heart, ScaleMode.ScaleToFit);

	GUI.Box (new Rect (Screen.width*0.1-sizeX*.5, offsetY, sizeX, sizeY), "Score: " +currentScore);
}