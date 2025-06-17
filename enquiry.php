<?php
$data=null; 
$full_name=$_POST['full_name'];   
$email=$_POST['email'];  
$number=$_POST['number'];  
$message=$_POST['message']; 
date_default_timezone_set('Asia/Colombo');
$date = date('Y-m-d H:i:s');
function spamcheck($field) {
$field=filter_var($field, FILTER_SANITIZE_EMAIL);
if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
return TRUE;
} else {
return FALSE;
}}
$mailcheck = spamcheck($email);
if($mailcheck==FALSE){
$data=array("reply"=>"error");
echo json_encode($data);
}else{
			$to="info@creative-2.com";
			$subject="New Inquiry !";
			$headers = "From:".$email."\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			$message="
			<html>
			<head>
			<style type='text/css'>
				table{
					border:1px solid;border-color:#03355f;
				}
				table td{
					border: 0.5px solid;
                    border-color: #4e4c4c;
                    font-family: 'Open Sans', sans-serif;
                    min-height: 25px;
                    font-size: 1.1em;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 5%;
				}
				table tr:last-child th{
					background-color: #f84a01;height:40px;
				}
				img{
					width:400px;	
				}
				table tr:first-child th{
					background-color: #f84a01;height:40px;
				}
				th a:first-child{
					font-family:'Times New Roman', Times, serif;
					font-size:43px;
					font-weight:500;
					color:#4EA7F6;
					text-decoration:none;	
				}
				font{
					font-family:'Times New Roman', Times, serif;
					font-size:25px;	
					padding-left:15px;	
				}
			</style>
			</head>
			<body>
			<table width='400' align='center' cellspacing='0' cellpadding='0'> 
				<tr>
					<td colspan='2' valign='middle'>
						<font style='font-size: 20px;margin-left: auto;font-family: Open Sans, sans-serif;margin-right: auto;
    display: block;'> Online Inquiry Form</font>
					</td>
				</tr> 
				<tr>
					<td width='150'>Full Name</td>
					<td width='250'>".$full_name."</td>
				</tr>
				<tr>
					<td>E-Mail</td>
					<td>".$email."</td>
				</tr>
				<tr>
					<td>Contact Number</td>
					<td>".$number."</td>
				</tr>   
				<tr>
					<td>Message</td>
					<td>".$message."</td>
				</tr>   
			</table>
			</body>
			</html>
			";
			$ml = mail($to,$subject,$message,$headers);
$data=array("reply"=>"done");
echo json_encode($data);
}
?>