<?php
	header('content-type:text/html;charset=utf-8');
	$userName = $_POST['username'];
	$userPass = $_POST['userpass'];
	$userPass = md5($userPass);
	$connect = mysql_connect('127.0.0.1','root','root');  //链接数据库
	if(!$connect){
		die('数据库链接失败');
	}
	$sql = 'set names utf8';
	$rs = mysql_query($sql,$connect);        // 设置字符集编码
	if(!$rs){
		die('数据路字符集编码设置错误');
	}
	$rs = mysql_select_db('aaa');
	if(!$rs){
		die('数据库不存在');
	}
	$sql = "insert into user(name,password) values('$userName','$userPass')";
	$rs = mysql_query($sql,$connect);
	if($rs){
		echo "<script>alert('注册成功');window.location.href='login.html';</script>";
		exit;
	}
?>