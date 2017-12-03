var pplayer = 0;
var pcomputer = 0;
var count = 0;
var flag = 0;
var a = new Array();
var b = new Array();

for (var i = 1; i <= 3; i++)
	{
		a[i] = new Array();
		b[i] = new Array();
	}

function check()
{
	for (var i = 1; i <= 3; i++)
	{
		if (b[i][1] == b[i][2] && b[i][2] == b[i][3] && b[i][3] != 0)
			return 1;
		if (b[1][i] == b[2][i] && b[2][i] == b[3][i] && b[3][i] != 0)
			return 1;
	}	
	if (b[1][1] == b[2][2] && b[2][2] == b[3][3] && b[3][3] != 0)
		return 1;
	if (b[1][3] == b[2][2] && b[2][2] == b[3][1] && b[3][1] != 0)
		return 1;
	return 0;
}

function create()
{
	flag = 0;
	for (var i = 1; i <= 3; i++)
		for (var j = 1; j <= 3; j++)
		{
			a[i][j] = "id" + i + j;
			b[i][j] = 0;
			$('#player').append('<div id=\'' + a[i][j] + '\'></div>');
			$('#' + a[i][j]).addClass("row");
		}

	for (var i = 1; i <= 3; i++)
		$('#' + a[i][3]).after('<div class=\'unrow\'> </div/>');
}

function noti(temp)
{
	flag = 1;
	//$('.row').delay(1000).queue(function(){$(this).remove();});
	//$('.unrow').delay(1000).queue(function(){$(this).remove();});
	if (temp == 1) 
	 	{
	 		$('#lastcenter').after('<h1 id=\'rwin\'> You Win!!! </h1>');
	 		pplayer++;
	 		$('#rwin').after('<h2><button> replay </button></h2>');
	 	} else 
	 	{
	 		$('#lastcenter').after('<h1 id=\'bwin\'> Computer Win!!! </h1>');
	 		pcomputer++;
	 		$('#bwin').after('<h2><button> replay </button></h2>');
	 	}
	
	$('#p1').text(pplayer.toString());
	$('#p2').text(pcomputer.toString());
	//$('#p2')[0].innerHTML = '<p>as</p>';
}

function noti2()
{
	$('#lastcenter').after('<h1 id=\'draw\'> Draw!!! </h1>');
	$('#draw').after('<h2><button> replay </button></h2>');
	$('#p1').text((++pplayer).toString());
	$('#p2').text((++pcomputer).toString());
}

function move(i, j)
{
	//alert("asd" + i + " " + j);
	$("#id" + i + j).css("background-color", 'blue');
	b[i][j] = 2;
	count++;
	if (check() == 1) noti(2);
	if (count == 9) noti2();
}

function botmove()
{

	if (b[2][2] == 0) {move(2, 2); return;}

	//tìm chiến thắng trên đường thẳng
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
			for (var k = 1; k <= 3;  k++)
			{
				if (b[i][k] == b[j][k] && b[i][k] == 2 && b[6-i-j][k] == 0) 
					{move(6-i-j, k); return;}
				if (b[k][i] == b[k][j] && b[k][i] == 2 && b[k][6-i-j] == 0) 
					{move(k, 6-i-j); return;}
			} 
	//tìm chiến thắng trên đường chéo
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
		{
			if (b[i][i] == b[j][j] && b[i][i] == 2 && b[6-i-j][6-i-j] == 0)
				{move(6-i-j, 6-i-j); return;}
			if (b[i][3-i+1] == b[j][3-j+1] && b[i][3-i+1] == 2 && b[6-i-j][3-(6-i-j)+1] == 0)
				{move(6-i-j, 3-(6-i-j)+1); return;}
		}
	//ngăn cản trên đường thẳng
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
			for (var k = 1; k <= 3;  k++)
			{
				if (b[i][k] == b[j][k] && b[i][k] == 1 && b[6-i-j][k] == 0) 
					{move(6-i-j, k); return;}
				if (b[k][i] == b[k][j] && b[k][i] == 1 && b[k][6-i-j] == 0) 
					{move(k, 6-i-j); return;}
			}
	//ngăn cản trên đường chéo
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
		{
			if (b[i][i] == b[j][j] && b[i][i] == 1 && b[6-i-j][6-i-j] == 0)
				{move(6-i-j, 6-i-j); return;}
			if (b[i][3-i+1] == b[j][3-j+1] && b[i][3-i+1] == 1 && b[6-i-j][3-(6-i-j)+1] == 0)
				{move(6-i-j, 3-(6-i-j)+1); return;}
		}
	//tạo cơ hội tam giác
	if (b[2][2] == 2)
	{
		if (b[1][1] == 2)
		 	{ if (b[3][1] == 0 && b[2][3] == 0 && b[2][1] == 0) {move(2, 1); return;}
		 	  if (b[1][3] == 0 && b[3][2] == 0 && b[1][2] == 0) {move(1, 2); return;}}
		if (b[1][3] == 2)
			{ if (b[3][3] == 0 && b[2][1] == 0 && b[2][3] == 0) {move(2, 3); return;}
			  if (b[1][1] == 0 && b[3][2] == 0 && b[1][2] == 0) {move(1, 2); return;}}
		if (b[3][1] == 2)
			{ if (b[3][3] == 0 && b[1][2] == 0 && b[3][2] == 0) {move(3, 2); return;}
			  if (b[1][1] == 0 && b[2][3] == 0 && b[2][1] == 0) {move(2, 1); return;}}
		if (b[3][3] == 2)
			{ if (b[1][3] == 0 && b[2][1] == 0 && b[2][3] == 0) {move(2, 3); return;}
			  if (b[3][1] == 0 && b[1][2] == 0 && b[3][2] == 0) {move(3, 2); return;}}
	}
	if (count == 3)
	{
		if (b[2][2] == 1 && b[3][3] == 1)
			{move(3, 1); return;}
		if (b[3][2] == 1 && b[2][3] == 1)
			{move(3, 3); return;}
	}

	//tạo cơ hội trên đường thẳng
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
			for (var k = 1; k <= 3;  k++)
			{
				if (b[i][k] == b[j][k] && b[i][k] == 0 && b[6-i-j][k] == 2) 
					{move(i, k); return;}
				if (b[k][i] == b[k][j] && b[k][i] == 0 && b[k][6-i-j] == 2) 
					{move(k, i); return;}
			} 
	//tạo cơ hội trên đường chéo
	for (var i = 1; i <= 2; i++)
		for (var j = 3; j >= i+1; j--)
		{
			if (b[i][i] == b[j][j] && b[i][i] == 0 && b[6-i-j][6-i-j] == 2)
				{move(i, i); return;}
			if (b[i][3-i+1] == b[j][3-j+1] && b[i][3-i+1] == 0 && b[6-i-j][3-(6-i-j)+1] == 2)
				{move(i, 3-i+1); return;}
		}

	//tao co hoi khi co 1 o
	if (b[1][1] == 0) {move(1, 1); return;}
	if (b[1][3] == 0) {move(1, 3); return;}
	if (b[3][1] == 0) {move(3, 1); return;}
	if (b[3][3] == 0) {move(3, 3); return;}

	if (b[1][2] == 0) {move(1, 2); return;}
	if (b[2][3] == 0) {move(2, 3); return;}
	if (b[3][2] == 0) {move(3, 2); return;}
	if (b[2][1] == 0) {move(2, 1); return;}
}


$(document).ready(function() 
{
	create();
});

$(document).on('click', '.row', function()
{
	 	var uid = $(this).attr('id');
	 	var i = parseInt(uid[2]); 
	 	var j = parseInt(uid[3]); 
	 	if (b[i][j] == 0 && flag == 0)
	 	{
	 		$(this).css("background-color", 'red');
	 		b[i][j] = 1;
	 		count++;
	 		if (check(b) == 1) noti(1); else botmove();
	 		if (count == 9) noti2();
	 	}

  	});

$(document).on('click', 'button', function(){
	$('h1').remove();
	$('h2').remove();
	$('.row').remove();
	$('.unrow').remove();
	create();
	count = 0;
	temp = 1;
});
