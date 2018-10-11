<?php
	header('content-type:text/html;charset=utf-8');
	$userName = $_POST['username'];
	$userPass = $_POST['userpass'];
	$connect = mysql_connect('127.0.0.1','root','root');  //链接数据库
	if(!$connect){
		die('数据库链接失败');
	}
	$sql = 'set names utf8';
	$rs = mysql_query($sql,$connect);        // 设置字符集编码
	if(!$rs){
		die('数据路字符集编码设置错误');
	}
	$rs = mysql_select_db('qqload');
	if(!$rs){
		die('数据库不存在');
	}
	$row = array();    
	$rows = array();
	$sql = 'select * from table1';
	$result = mysql_query($sql,$connect);
	while($row = mysql_fetch_assoc($result)){
		$rows[] = $row;
	}
	for($i = 0 ; $i < count($rows) ; $i++){
		if($userName == $rows[$i]['name'] && md5($userPass) == $rows[$i]['password']){
			echo "<script>alert('登录成功');window.location.href='index.html';</script>";
			exit;
		}
	}
	echo "<script>alert('用户民密码错误');window.location.href='login.html';</script>";
	
?>