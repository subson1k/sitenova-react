<!DOCTYPE html>



<html>
  <?php
  echo "<pre>";

   print_r($_POST);

  echo "</pre>";

   $userName = $_POST['name'];
   $userEmail = $_POST['email'];
   $messageSubject = $POST['subject'];
   $userPhone = $_POST['tel'];
   $userMsg = $_POST['message'];

   $to = "haywoodnick@sky.com";
   $body = "";

   $body .= "From: ".$userName."\r\n";
   $body .= "email: ".$userEmail."\r\n";
   $body .= "phone: ".$userPhone."\r\n";
   $body .= "message: ".$userMsg."\r\n";
  
   mail($to,$subject,$body);

?>


<head>
    <meta name="description"content="fhfhfhfhfhf"> 
      <title>base hair design prices</title>
  
      <link href="send.css" type="text/css" rel="stylesheet"/>
  
   
  </head>
  
  <body>
  
        
          
         
      
       
     
       <div id="box2" >
                                                 <p class="a2">Thanks for your interest. <br />
                                                  We will get back to you as soon <br /> 
                                                  as we can.</p>
                                              
                   
                                                   
                                                  
                
       </div>
  
    
      
       <div id="box3">


       </div>
     
      
    
    
         
        
          
          
      
     
    
  
  </body>
  
  
  </html>