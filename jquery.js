var mang = ['U', 'F', 'R', 'L', 'B', 'D'];
var index = new Array();
var reply = new Array();
var a = new Array();

for (var i = 1; i <= 6; i++)
	a[i] = new Array();
var number = 20;

var ans = ''; 

var e = new Array();
e[1] = [0, 1, 1, 2, 5, 1, 2];
e[2] = [0, 1, 2, 1, 4, 1, 2];
e[3] = [0, 1, 2, 3, 3, 1, 2];
e[4] = [0, 1, 3, 2, 2, 1, 2];

e[5] = [0, 6, 1, 2, 2, 3, 2];
e[6] = [0, 6, 2, 1, 4, 3, 2];
e[7] = [0, 6, 2, 3, 3, 3, 2];
e[8] = [0, 6, 3, 2, 5, 3, 2];

e[9] = [0, 2, 2, 1, 4, 2, 3];
e[10] = [0, 2, 2, 3, 3, 2, 1];
e[11] = [0, 5, 2, 1, 3, 2, 3];
e[12] = [0, 5, 2, 3, 4, 2, 1];

function turnUtoD()
{
	if (a[e[1][4]][e[1][5]][e[1][6]] == 5) 
		{ans = ans + 'B2'; turnB(); turnB();}
	if (a[e[2][4]][e[2][5]][e[2][6]] == 4) 
		{ans = ans + 'L2'; turnL(); turnL();}
	if (a[e[3][4]][e[3][5]][e[3][6]] == 3) 
		{ans = ans + 'R2'; turnR(); turnR();}
	if (a[e[4][4]][e[4][2]][e[4][6]] == 2) 
		{ans = ans + 'F2'; turnF(); turnF();}
}

function solve_cross()
{
	ans = '';
	for (var i = 1; i <= 4; i++)
		if (a[e[i][1]][e[i][2]][e[i][3]] == 6)
		{
			if (i == 1)
			{
				if (a[e[i][4]][e[i][5]][e[i][6]] == 2) 
					{ans = ans + 'U2'; turnU(); turnU();}
				if (a[e[i][4]][e[i][5]][e[i][6]] == 3) 
					{ans = ans + 'U'; turnU();}
				if (a[e[i][4]][e[i][5]][e[i][6]] == 4) 
					{ans = ans + 'U\''; turnU(); turnU(); turnU();}
				turnUtoD();
			}

		}
	alert(ans);
}

function selfturn(i)
{
	var temp = a[i][1][3]; a[i][1][3] = a[i][1][1]; a[i][1][1] = a[i][3][1]; a[i][3][1] = a[i][3][3]; a[i][3][3] = temp;
    temp = a[i][1][2]; a[i][1][2] = a[i][2][1]; a[i][2][1] = a[i][3][2]; a[i][3][2] = a[i][2][3]; a[i][2][3] = temp;
}
function turnF()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[4][i][3];
	for (var i = 1; i <= 3; i++)
	{
		a[4][i][3] = a[6][1][i];
		a[6][1][i] = a[3][3-i+1][1];
        a[3][3-i+1][1] = a[1][3][3-i+1];
		a[1][3][3-i+1] = b[i];
	}
	selfturn(2);
}

function turnR()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[1][i][3];
	for (var i = 1; i <= 3; i++)
	{
		a[1][i][3] = a[2][i][3];
		a[2][i][3] = a[6][i][3];
        a[6][i][3] = a[5][3-i+1][1];
		a[5][3-i+1][1] = b[i];
	}
	selfturn(3);
}

function turnU()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[2][1][i];
	for (var i = 1; i <= 3; i++)
	{
		a[2][1][i] = a[3][1][i];
		a[3][1][i] = a[5][1][i];
        a[5][1][i] = a[4][1][i];
		a[4][1][i] = b[i];
	}
	selfturn(1);
}

function turnL()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[1][i][1];
	for (var i = 1; i <= 3; i++)
	{
		a[1][i][1] = a[5][3-i+1][3];
		a[5][3-i+1][3] = a[6][i][1];
        a[6][i][1] = a[2][i][1];
		a[2][i][1] = b[i];
	}
	selfturn(4);
}

function turnD()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[2][3][i];
	for (var i = 1; i <= 3; i++)
	{
		a[2][3][i] = a[4][3][i];
		a[4][3][i] = a[5][3][i];
        a[5][3][i] = a[3][3][i];
		a[3][3][i] = b[i];
	}
	selfturn(6);
}

function turnB()
{
	var b = new Array();
	for (var i = 1; i <= 3; i++) b[i] = a[3][i][3];
	for (var i = 1; i <= 3; i++)
	{
		a[3][i][3] = a[6][3][3-i+1];
		a[6][3][3-i+1] = a[4][3-i+1][1];
        a[4][3-i+1][1] = a[1][1][i];
		a[1][1][i] = b[i];
	}
	selfturn(5);
}

function set_cube()
{
	for (var i = 1; i <= number; i++)
	{
		if (index[i] == 1) 
			for (var j = 1; j <= reply[i]; j++) turnU();
		if (index[i] == 2) 
			for (var j = 1; j <= reply[i]; j++) turnF();
		if (index[i] == 3) 
			for (var j = 1; j <= reply[i]; j++) turnR();
		if (index[i] == 4) 
			for (var j = 1; j <= reply[i]; j++) turnL();
		if (index[i] == 5) 
			for (var j = 1; j <= reply[i]; j++) turnB();
		if (index[i] == 6) 
			for (var j = 1; j <= reply[i]; j++) turnD();
	}
}

function create(cube)
{
	for (var i = 1; i <= 3; i++) a[cube][i] = new Array();
	for (var i = 1; i <= 3; i++)
		for (var j = 1; j <= 3; j++)
			a[cube][i][j] = cube;
}

function reset_cube()
{
	for (var i = 1; i <= 6; i++)
		create(i);
}

function draw_cube()
{
	var color = ['white', 'green', 'red', 'orange', 'blue', 'yellow'];
	for (var k = 1; k <= 6; k++)
	{
		for (var i = 1; i <= 3; i++)
			for (var j = 1; j <= 3; j++)
				$('#cube' + k + i + j).css('background-color', color[ a[k][i][j] - 1]);
	}
}

function create_scram()
{
	var s = ''; 
	var pre = -1; var j = -1;
	for (var i = 1; i <= number; i++)
	{
		while (j == pre) 
			j = Math.floor(Math.random()*100) % 6;
		pre = j;
		var rep = Math.floor(Math.random()*100) % 3 + 1;
		s = s + mang[j];
		if (rep == 2) s = s + '2';
		if (rep == 3) s = s + '\'';
		s = s + ' ';
		index[i] = j + 1;
		reply[i] = rep;
	}
	return s;
}

function draw_scram1(c)
{
	for (var i = 1; i <= 3; i++)
	{
		for (var j = 1; j <= 3; j++)
		{
			$('#graph').append('<div id=\'cube'+ (c+6) + i + j + '\'></div>');
			$('#cube' + (c+6) + i + j).addClass("row2");
		}
		$('#cube' + (c+6) + i + '3').after('<div class=\'unrow3\'> </div/>');
		for (var j = 1; j <= 3; j++)
		{
			$('#graph').append('<div id=\'cube'+ c + i + j + '\'></div>');
			$('#cube' + c + i + j).addClass("row");
		}
	}

	for (var i = 1; i <= 2; i++)
		$('#cube' + c + i + '3').after('<div class=\'unrow1\'> </div/>');
	$('#cube' + c + '3' + '3').after('<div class=\'unrow2\'> </div/>');
}

function draw_scram2()
{
	var temp = [4, 2, 3, 5];
	for (var i = 1; i <= 3; i++)
		for (var k = 2; k <= 5; k++)
			{
				for (var j = 1; j <= 3; j++)
				{
					$('#graph').append('<div id=\'cube'+ temp[k-2] + i + j + '\'></div>');
					$('#cube' + temp[k-2] + i + j).addClass("row");
				}
				if (k != 5) 
					$('#cube' + temp[k-2] + i + '3').after('<div class=\'unrow3\'> </div/>');
			}

	for (var i = 1; i <= 2; i++)
		$('#cube' + '5' + i + '3').after('<div class=\'unrow1\'> </div/>');
	$('#cube' + '5' + '3' + '3').after('<div class=\'unrow2\'> </div/>');
}

$(document).ready(function() 
{
	$('#scram').text(create_scram());
	draw_scram1(1); draw_scram2(); draw_scram1(6);
	reset_cube();
	set_cube();
	draw_cube();
});

$(document).on('click', '#but', function()
{
	$('#scram').text(create_scram());
	reset_cube();
	set_cube();
	draw_cube();
});

$(document).on('click', '#time', function()
{
	//solve_cross();
});
