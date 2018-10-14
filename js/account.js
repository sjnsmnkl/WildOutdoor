$(document).ready(function(){

	var currTravellerId = "";

	var currBillId = "";

	var currPayId = "";

	var billCount = 0;

	var travellerCount = 0;

	var payCount = 0;

	var creditcardtype = "";

	//default load account panel, hide the others

	$("#userFooter").ready(function(event){

		$.get("userInfoEdit.php?user=all", $(this).serialize(), showUser);

		event.preventDefault();		

	});

	

	//click left side button to show/hide panels

	$("#userBillBtn").click(function(event){

		

		$.get("userInfoEdit.php?bill=all", $(this).serialize(), showBill);

		event.preventDefault();	

	});

	

	$("#userInfoBtn").click(function(){

		

	});

	

	$("#userTravellerBtn").click(function(event){

		

		$.get("userInfoEdit.php?traveller=all", $(this).serialize(), showTraveller);

		event.preventDefault();		

	});	

	

	$("#userPayBtn").click(function(event){

			

		$.get("userInfoEdit.php?payment=all", $(this).serialize(), showPay);

		event.preventDefault();		

	});	

	

	//header search function

	var RegExp = /^[a-zA-Z0-9\s]*$/;  

	$("#searchLink").click(function(){		

		var searchItem = $(".search").val();

		

		if(searchItem !== ""){		

			if(searchItem.match(RegExp)){

				$("#searchLink").attr('href', 'product.php?search=' + searchItem);	

			}

			else{

				alert("Your input is invalid.");

			}

		}

	});		

	//show exist bill address

	var showBill = function(response){

		var allBill = "";

		if(response == "no item"){

			$("#existBill").html("");

			//document.getElementById("homeFooter").classList.add('stikybottom');

		}

		else{

			for(var i = 0; i < response.length; i++){

				allBill+= "<table class='billTable2 table' width='100%' border='1'>";

				allBill+= "<tr><th class='billTableT'></th><th class='billTableT'>Full Name</th>" +

				"<th class='billTableT'>Billing Address</th>" +

				"<th class='billTableT'>City</th>" +

				"<th class='billTableT'>Province</th>" +

				"<th class='billTableT'>Postal Code</th></tr>";

				allBill+= "<tr><td class='billTableT'><input type='radio' id='" + response[i]["billId"] +"' class='radioBill' name='selectBill'/></td>" + 

				"<td id= '" + response[i]["billId"] + "name"+ "' class='billTableT'>" + response[i]["billName"] + "</td>" +

				"<td id= '" + response[i]["billId"] + "add"+ "' class='billTableT'>" + response[i]["billAdd"] + "</td>" +

				"<td id= '" + response[i]["billId"] + "city"+ "' class='billTableT'>" + response[i]["billCity"] + "</td>" +

				"<td id= '" + response[i]["billId"] + "prov"+ "' class='billTableT'>" + response[i]["billProv"] + "</td>" +

				"<td id= '" + response[i]["billId"] + "post"+ "' class='billTableT'>" + response[i]["billPost"] + "</td></tr></table>";		

			}

			billCount = response.length;

			$("#existBill").html(allBill);

			//select radio button on billing panel

			$(".radioBill").on('change',function(event){

				var billId = $(this).attr('id');		

				currBillId = billId;

				var billname = $("#" + billId + "name").html();

				var billadd = $("#" + billId + "add").html();

				var billcity = $("#" + billId + "city").html();

				var billprov = $("#" + billId + "prov").html();

				var billpost = $("#" + billId + "post").html();

				$("#billto").val(billname);

				$("#billAdd").val(billadd);

				$("#billcity").val(billcity);

				$("#billprov").val(billprov);

				$("#billpost").val(billpost);

			});	

		}

	};			

	//show exist traveller address

	var showTraveller = function(response){

		var allTraveller = "";

		if(response == "no item"){

			$("#existTraveller").html("");

			//document.getElementById("homeFooter").classList.add('stikybottom');

		}

		else{

			for(var i = 0; i < response.length; i++){

			allTraveller+= "<table class='travellerTable2 table' width='100%' border='1'>";

			allTraveller+= "<tr><th class='travellerTableT'></th><th class='travellerTableT'>Full Name</th>" + 

			"<th class='travellerTableT'>Address</th>" + 

			"<th class='travellerTableT'>City</th>" + 

			"<th class='travellerTableT'>Province</th>" + 

			"<th class='travellerTableT'>Postal Code</th>" +

			"<th class='travellerTableT'>Phone</th>" +

			"<th class='travellerTableT'>ID Type</th>" +

			"<th class='travellerTableT'>ID Number</th></tr>";

			allTraveller+= "<tr><td class='travellerTableT'><input type='radio' id='" + response[i]["id"] + "' class='radioAddr' name='selectTraveller'/></td>" + 

			"<td id='" + response[i]["id"] + "travellerName" + "' class='travellerTableT'>" + response[i]["name"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerAdd" + "' class='travellerTableT'>" + response[i]["address"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerCity" + "' class='travellerTableT'>" + response[i]["city"] + "</td>" + 

			"<td id='" + response[i]["id"] + "travellerProv" + "' class='travellerTableT'>" + response[i]["province"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerPostal" + "' class='travellerTableT'>" + response[i]["postalcode"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerPhone" + "' class='travellerTableT'>" + response[i]["phone"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerIdType" + "' class='travellerTableT'>" + response[i]["idType"] + "</td>" +

			"<td id='" + response[i]["id"] + "travellerIdNumber" + "' class='travellerTableT'>" + response[i]["idNumber"] + "</td></tr></table>";			

			}

			travellerCount = response.length;

			$("#existBill").html("");

			$("#existTraveller").html(allTraveller);

			//select radio button on traveller panel

			$(".radioAddr").on('change', function(e){

				var travellerId = $(this).attr('id');

				currTravellerId = travellerId;

				var travellerName = $("#" + travellerId + "travellerName").html();

				var travellerAdd = $("#" + travellerId + "travellerAdd").html();

				var travellerCity = $("#" + travellerId + "travellerCity").html();

				var travellerProv = $("#" + travellerId + "travellerProv").html();

				var travellerPostal = $("#" + travellerId + "travellerPostal").html();

				var travellerPhone = $("#" + travellerId + "travellerPhone").html();

				var travellerIdType = $("#" + travellerId + "travellerIdType").html();

				var travellerIdNumber = $("#" + travellerId + "travellerIdNumber").html();

				$("#travellerName").val(travellerName);

				$("#travellerAdd").val(travellerAdd);

				$("#travellerCity").val(travellerCity);

				$("#travellerProv").val(travellerProv);

				$("#travellerPostal").val(travellerPostal);

				$("#travellerPhone").val(travellerPhone);

				$("#travellerIdType").val(travellerIdType);

				$("#travellerIdNumber").val(travellerIdNumber);

			});	

		}			

	};		

	//show Payment

	var showPay = function(response){

		var allcard = "";

		if(response == "no item"){

			$("#existPay").html(" ");

			//document.getElementById("homeFooter").classList.add('stikybottom');

		}

		else{

			for(var i = 0; i < response.length; i++){

			allcard+= "<table class='payTable2 table' width='100%' border='1'>";

			allcard+= "<tr><th class='payTableT'></th><th class='payTableT'>Card Holder</th>" +

						"<th class='payTableT'>Card Type</th>" +

						"<th class='payTableT'>Card No.</th>" +

						"<th class='payTableT'>Expire Date</th></tr>";

			allcard+= "<tr><td class='payTableT'><input type='radio' id='" + response[i]["paymentID"] + "' class='radioPay' name='selectPay'/></td>" +

			"<td id='" + response[i]["paymentID"] + "pname" + "'class='cardnumT'>" + response[i]["cardHolder"] +"</td>" +

			"<td id='" + response[i]["paymentID"] + "ptype" + "'class='cardnumT'>" + response[i]["cardType"] + "</td>" +

			"<td id='" + response[i]["paymentID"] + "pnum" + "'class='cardnumT'>" + response[i]["cardNumber"] + "</td>" +

			"<td id='" + response[i]["paymentID"] + "pexp" + "'class='cardnumT'>" + response[i]["expire"] + 

			"</td></tr></table>";			

		}

			payCount = response.length;

			$("#existBill").html("");

			$("#existTraveller").html("");

			$("#existPay").html(allcard);

			//select radio button on shipping panel

			$(".radioPay").on('change', function(e){

				var payId = $(this).attr('id');

				currPayId = payId;

				var cardholder = $("#" + payId + "pname").html();

				var cardnum = $("#" + payId + "pnum").html();

				var cardexp = $("#" + payId + "pexp").html();

				var cardtype = $("#" + payId + "ptype").html();

				$("#cardHolder").val(cardholder)

				$("#cardNum").val(cardnum);

				$("#cardExp").val(cardexp);

				var typeArray = $('input[name="cardType"]').toArray();

			for(var i = 0; i < $('input[name="cardType"]').length; i++){

				if(typeArray[i].value == cardtype){

					typeArray[i].checked = true;

				}

				else{

					typeArray[i].checked = false;

				}				

			}

			e.preventDefault();

			});			

		}

	};

	//Form submit function

	$("#userForm").submit(function(e){

		var button = $("input[type=submit][clicked=true]").val();

		//Update user name or password

		if(button == "Update Name"){

			var inputName = $("#name").val();

			if(inputName !== "" && inputName.match(RegExp)){

				$.post("userInfoEdit.php?edit=name",$(this).serialize(), showUser);	

				$("#message").html("Your name has been updated successfully.");	

				$("#error").html("");

				e.preventDefault();			

			}

			else{

				$("#error").html("Your name should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();		

			}

		}

		if(button == "Update Password"){

			var inputPwd = $("#userPassword").val();

			if(inputPwd !== "" && inputPwd.match(RegExp)){

				$.post("userInfoEdit.php?edit=pwd",$(this).serialize(), showPwd);

				$("#message").html("Your password has been updated successfully.");	

				$("#error").html("");	

				e.preventDefault();				

			}

			else{

				$("#error").html("Your password should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();					

			}			

		}


	});

	//Form submit function

	$("#userForm2").submit(function(e){

		var button = $("input[type=submit][clicked=true]").val();

		//Update user name or password

		if(button == "Update Name"){

			var inputName = $("#name").val();

			if(inputName !== "" && inputName.match(RegExp)){

				$.post("userInfoEdit.php?edit=name",$(this).serialize(), showUser);	

				$("#message").html("Your name has been updated successfully.");	

				$("#error").html("");

				e.preventDefault();			

			}

			else{

				$("#error").html("Your name should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();		

			}

		}

		if(button == "Update Password"){

			var inputPwd = $("#userPassword").val();

			if(inputPwd !== "" && inputPwd.match(RegExp)){

				$.post("userInfoEdit.php?edit=pwd",$(this).serialize(), showPwd);

				$("#message").html("Your password has been updated successfully.");	

				$("#error").html("");	

				e.preventDefault();				

			}

			else{

				$("#error").html("Your password should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();					

			}			

		}

		//buttons on bill and traveller panel

		var buttonName = $("input[type=submit][clicked=true]").attr('name');

			var travellerNameBox = $("#travellerName").val();

			var travellerAddBox = $("#travellerAdd").val();

			var travellerCityBox = $("#travellerCity").val();

			var travellerProvBox = $("#travellerProv").val();

			var travellerPostalBox = $("#travellerPostal").val();	

			var travellerPhoneBox = $("#travellerPhone").val();	

			var travellerIdTypeBox = $("#travellerIdType").val();	

			var travellerIdNumberBox = $("#travellerIdNumber").val();	

		//create, update, or delete traveller info

		if(buttonName == "updateTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please make sure every text box has content.");

					$("#travellerMessage").html("");

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					$.post("userInfoEdit.php?updateTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have Updated successfully.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}			

			}

		}	

		if(buttonName == "createTravellerBtn"){

			if(travellerCount > 1){

					$("#travellerError").html("You can have no more than 2 records.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();					

			}

			if(travellerCount < 2){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please do not leave any blank.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					console.log(travellerCount);

					$.post("userInfoEdit.php?createTraveller=yes",$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have created new traveller information.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}					

			}

		}

		if(buttonName == "deleteTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				$.post("userInfoEdit.php?deleteTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

				$("#travellerMessage").html("You have deleted one record.");

				$("#travellerError").html("");

				currTravellerId == "";

				e.preventDefault();	

				$(".textbox").val("");

				$.get("userInfoEdit.php?traveller=all", $(this).serialize(), showTraveller);	

			}

		}

		var billNameBox = $("#billto").val();

		var billAddrBox = $("#billAddr").val();

		var billCityBox = $("#billcity").val();

		var billProvBox = $("#billprov").val();

		var billPostBox = $("#billpost").val();		

		//create, update or delete bill address

		if(buttonName == "deleteBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();

			}

			if(currBillId !== ""){

				$.post("userInfoEdit.php?deleteBill=" + currBillId, $(this).serialize(), showBill);

				$("#billError").html("");

				$("#billMessage").html("You have deleted one record.");

				currBillId = "";

				e.preventDefault();

				$(".textbox").val("");

				$.get("userInfoEdit.php?bill=all", $(this).serialize(), showBill);

			}

		}

		if(buttonName == "createBillBtn"){

			if(billCount > 1){

				$("#billError").html("You can have no more than 2 records.");

				$("#billMessage").html("");

				currBillId = "";

				e.preventDefault();					

			}

			if(billCount < 2){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

					$("#billError").html("Please make sure every text box has content.");

					$("#billMessage").html("");

					currBillId = "";

					e.preventDefault();					

				}

				if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

					$.post("userInfoEdit.php?createBill=yes",$(this).serialize(), showBill);	

					$(".textbox").val("");

					$("#billMessage").html("You have created new Billing address.");

					$("#billError").html("");

					currBillId = "";

					e.preventDefault();						

				}

			}

		}

		if(buttonName == "updateBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();					

			}

			if(currBillId !== ""){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

				$("#billError").html("Please make sure every text box has content.");

				$("#billMessage").html("");

				e.preventDefault();					

				}

			if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

				$.post("userInfoEdit.php?updateBill=" + currBillId,$(this).serialize(), showBill);	

				$(".textbox").val("");

				$("#billMessage").html("You have updated your billing address.");

				$("#billError").html("");

				currBillId = "";

				e.preventDefault();					

				}			

			}

		}

		var payNameBox = $("#cardHolder").val();

		var cardNumBox = $("#cardNum").val();

		var cardExpBox = $("#cardExp").val();

		var cardTypeBox = creditcardtype;	

		//create, update, or delete payment

		if(buttonName == "deletePayBtn"){

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();

			}

			if(currPayId !== ""){

				$.post("userInfoEdit.php?deletePay=" + currPayId, $(this).serialize(), showPay);

				$("#payError").html("");

				$("#payMessage").html("You have deleted one record.");

				e.preventDefault();

				currPayId = "";

				$(".textbox").val("");

				$.get("userInfoEdit.php?payment=all", $(this).serialize(), showPay);

				

			}			

		}

		if(buttonName == "createPayBtn"){

			console.log(cardTypeBox);

			if(payCount > 1){

				$("#payError").html("You can have no more than 2 records.");

				$("#payMessage").html("");

				currPayId = "";

				e.preventDefault();					

			}

			if(payCount < 2){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == "" || cardTypeBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

				}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== "" && cardTypeBox !== ""){

					$.post("userInfoEdit.php?createpay=yes",$(this).serialize(), showPay);	

					$(".textbox").val("");

					$("#payMessage").html("You have created new Billing address.");

					$("#payError").html("");

					currPayId = "";

					e.preventDefault();						

				}

			}			

		}

		if(buttonName == "updatePayBtn"){		

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();					

			}

			if(currPayId !== ""){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

					}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== ""){

					

					if(!cardExpBox.match(/^(0[1-9]|1[0-2])[-][1-9][7-9]$/)){

						document.getElementById('payError').innerHTML = "Please enter Expire date by mm-yy";

						$("#payMessage").html("");

						e.preventDefault();	

					} 

					else{

							var dValue = cardExpBox.split('-');

							var d = new Date();

							var year = parseInt(dValue[1], 10) + 2000;

							var month = parseInt(dValue[0], 10);

							var currentYear = d.getFullYear();

							var currentMonth = d.getMonth() + 1;	

							if(year < currentYear || (month < currentMonth && year == currentYear)){

								document.getElementById('payError').innerHTML = "Your expire date has passed."; 

								$("#payMessage").html("");

								cardExpBox = "";

								e.preventDefault();	

								}

							else{

								document.getElementById('payError').innerHTML = "";

								$.post("userInfoEdit.php?updatepay=" + currPayId,$(this).serialize(), showPay);	

								$(".textbox").val("");

								$("#payMessage").html("You have updated your payment method.");

								$("#payError").html("");

								currPayId = "";

								e.preventDefault();								

								}

						}						

				}			

			}	

		}

	});

	

		//Form submit function

	$("#userForm3").submit(function(e){

		var button = $("input[type=submit][clicked=true]").val();

		//Update user name or password

		if(button == "Update Name"){

			var inputName = $("#name").val();

			if(inputName !== "" && inputName.match(RegExp)){

				$.post("userInfoEdit.php?edit=name",$(this).serialize(), showUser);	

				$("#message").html("Your name has been updated successfully.");	

				$("#error").html("");

				e.preventDefault();			

			}

			else{

				$("#error").html("Your name should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();		

			}

		}

		if(button == "Update Password"){

			var inputPwd = $("#userPassword").val();

			if(inputPwd !== "" && inputPwd.match(RegExp)){

				$.post("userInfoEdit.php?edit=pwd",$(this).serialize(), showPwd);

				$("#message").html("Your password has been updated successfully.");	

				$("#error").html("");	

				e.preventDefault();				

			}

			else{

				$("#error").html("Your password should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();					

			}			

		}

		//buttons on bill and traveller panel

		var buttonName = $("input[type=submit][clicked=true]").attr('name');

			var travellerNameBox = $("#travellerName").val();

			var travellerAddBox = $("#travellerAdd").val();

			var travellerCityBox = $("#travellerCity").val();

			var travellerProvBox = $("#travellerProv").val();

			var travellerPostalBox = $("#travellerPostal").val();	

			var travellerPhoneBox = $("#travellerPhone").val();	

			var travellerIdTypeBox = $("#travellerIdType").val();	

			var travellerIdNumberBox = $("#travellerIdNumber").val();	

		//create, update, or delete traveller info

		if(buttonName == "updateTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please make sure every text box has content.");

					$("#travellerMessage").html("");

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					$.post("userInfoEdit.php?updateTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have Updated successfully.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}			

			}

		}	

		if(buttonName == "createTravellerBtn"){

			if(travellerCount > 1){

					$("#travellerError").html("You can have no more than 2 records.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();					

			}

			if(travellerCount < 2){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please do not leave any blank.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					console.log(travellerCount);

					$.post("userInfoEdit.php?createTraveller=yes",$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have created new traveller information.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}					

			}

		}

		if(buttonName == "deleteTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				$.post("userInfoEdit.php?deleteTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

				$("#travellerMessage").html("You have deleted one record.");

				$("#travellerError").html("");

				currTravellerId == "";

				e.preventDefault();	

				$(".textbox").val("");

				$.get("userInfoEdit.php?traveller=all", $(this).serialize(), showTraveller);	

			}

		}

		var billNameBox = $("#billto").val();

		var billAddrBox = $("#billAddr").val();

		var billCityBox = $("#billcity").val();

		var billProvBox = $("#billprov").val();

		var billPostBox = $("#billpost").val();		

		//create, update or delete bill address

		if(buttonName == "deleteBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();

			}

			if(currBillId !== ""){

				$.post("userInfoEdit.php?deleteBill=" + currBillId, $(this).serialize(), showBill);

				$("#billError").html("");

				$("#billMessage").html("You have deleted one record.");

				currBillId = "";

				e.preventDefault();

				$(".textbox").val("");

				$.get("userInfoEdit.php?bill=all", $(this).serialize(), showBill);

			}

		}

		if(buttonName == "createBillBtn"){

			if(billCount > 1){

				$("#billError").html("You can have no more than 2 records.");

				$("#billMessage").html("");

				currBillId = "";

				e.preventDefault();					

			}

			if(billCount < 2){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

					$("#billError").html("Please make sure every text box has content.");

					$("#billMessage").html("");

					currBillId = "";

					e.preventDefault();					

				}

				if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

					$.post("userInfoEdit.php?createBill=yes",$(this).serialize(), showBill);	

					$(".textbox").val("");

					$("#billMessage").html("You have created new Billing address.");

					$("#billError").html("");

					currBillId = "";

					e.preventDefault();						

				}

			}

		}

		if(buttonName == "updateBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();					

			}

			if(currBillId !== ""){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

				$("#billError").html("Please make sure every text box has content.");

				$("#billMessage").html("");

				e.preventDefault();					

				}

			if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

				$.post("userInfoEdit.php?updateBill=" + currBillId,$(this).serialize(), showBill);	

				$(".textbox").val("");

				$("#billMessage").html("You have updated your billing address.");

				$("#billError").html("");

				currBillId = "";

				e.preventDefault();					

				}			

			}

		}

		var payNameBox = $("#cardHolder").val();

		var cardNumBox = $("#cardNum").val();

		var cardExpBox = $("#cardExp").val();

		var cardTypeBox = creditcardtype;	

		//create, update, or delete payment

		if(buttonName == "deletePayBtn"){

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();

			}

			if(currPayId !== ""){

				$.post("userInfoEdit.php?deletePay=" + currPayId, $(this).serialize(), showPay);

				$("#payError").html("");

				$("#payMessage").html("You have deleted one record.");

				e.preventDefault();

				currPayId = "";

				$(".textbox").val("");

				$.get("userInfoEdit.php?payment=all", $(this).serialize(), showPay);

				

			}			

		}

		if(buttonName == "createPayBtn"){

			console.log(cardTypeBox);

			if(payCount > 1){

				$("#payError").html("You can have no more than 2 records.");

				$("#payMessage").html("");

				currPayId = "";

				e.preventDefault();					

			}

			if(payCount < 2){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == "" || cardTypeBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

				}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== "" && cardTypeBox !== ""){

					$.post("userInfoEdit.php?createpay=yes",$(this).serialize(), showPay);	

					$(".textbox").val("");

					$("#payMessage").html("You have created new Billing address.");

					$("#payError").html("");

					currPayId = "";

					e.preventDefault();						

				}

			}			

		}

		if(buttonName == "updatePayBtn"){		

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();					

			}

			if(currPayId !== ""){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

					}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== ""){

					

					if(!cardExpBox.match(/^(0[1-9]|1[0-2])[-][1-9][7-9]$/)){

						document.getElementById('payError').innerHTML = "Please enter Expire date by mm-yy";

						$("#payMessage").html("");

						e.preventDefault();	

					} 

					else{

							var dValue = cardExpBox.split('-');

							var d = new Date();

							var year = parseInt(dValue[1], 10) + 2000;

							var month = parseInt(dValue[0], 10);

							var currentYear = d.getFullYear();

							var currentMonth = d.getMonth() + 1;	

							if(year < currentYear || (month < currentMonth && year == currentYear)){

								document.getElementById('payError').innerHTML = "Your expire date has passed."; 

								$("#payMessage").html("");

								cardExpBox = "";

								e.preventDefault();	

								}

							else{

								document.getElementById('payError').innerHTML = "";

								$.post("userInfoEdit.php?updatepay=" + currPayId,$(this).serialize(), showPay);	

								$(".textbox").val("");

								$("#payMessage").html("You have updated your payment method.");

								$("#payError").html("");

								currPayId = "";

								e.preventDefault();								

								}

						}						

				}			

			}	

		}

	});

		//Form submit function

	$("#userForm4").submit(function(e){

		var button = $("input[type=submit][clicked=true]").val();

		//Update user name or password

		if(button == "Update Name"){

			var inputName = $("#name").val();

			if(inputName !== "" && inputName.match(RegExp)){

				$.post("userInfoEdit.php?edit=name",$(this).serialize(), showUser);	

				$("#message").html("Your name has been updated successfully.");	

				$("#error").html("");

				e.preventDefault();			

			}

			else{

				$("#error").html("Your name should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();		

			}

		}

		if(button == "Update Password"){

			var inputPwd = $("#userPassword").val();

			if(inputPwd !== "" && inputPwd.match(RegExp)){

				$.post("userInfoEdit.php?edit=pwd",$(this).serialize(), showPwd);

				$("#message").html("Your password has been updated successfully.");	

				$("#error").html("");	

				e.preventDefault();				

			}

			else{

				$("#error").html("Your password should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();					

			}			

		}

		//buttons on bill and traveller panel

		var buttonName = $("input[type=submit][clicked=true]").attr('name');

			var travellerNameBox = $("#travellerName").val();

			var travellerAddBox = $("#travellerAdd").val();

			var travellerCityBox = $("#travellerCity").val();

			var travellerProvBox = $("#travellerProv").val();

			var travellerPostalBox = $("#travellerPostal").val();	

			var travellerPhoneBox = $("#travellerPhone").val();	

			var travellerIdTypeBox = $("#travellerIdType").val();	

			var travellerIdNumberBox = $("#travellerIdNumber").val();	

		//create, update, or delete traveller info

		if(buttonName == "updateTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please make sure every text box has content.");

					$("#travellerMessage").html("");

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					$.post("userInfoEdit.php?updateTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have Updated successfully.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}			

			}

		}	

		if(buttonName == "createTravellerBtn"){

			if(travellerCount > 1){

					$("#travellerError").html("You can have no more than 2 records.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();					

			}

			if(travellerCount < 2){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please do not leave any blank.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					console.log(travellerCount);

					$.post("userInfoEdit.php?createTraveller=yes",$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have created new traveller information.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}					

			}

		}

		if(buttonName == "deleteTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				$.post("userInfoEdit.php?deleteTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

				$("#travellerMessage").html("You have deleted one record.");

				$("#travellerError").html("");

				currTravellerId == "";

				e.preventDefault();	

				$(".textbox").val("");

				$.get("userInfoEdit.php?traveller=all", $(this).serialize(), showTraveller);	

			}

		}

		var billNameBox = $("#billto").val();

		var billAddrBox = $("#billAddr").val();

		var billCityBox = $("#billcity").val();

		var billProvBox = $("#billprov").val();

		var billPostBox = $("#billpost").val();		

		//create, update or delete bill address

		if(buttonName == "deleteBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();

			}

			if(currBillId !== ""){

				$.post("userInfoEdit.php?deleteBill=" + currBillId, $(this).serialize(), showBill);

				$("#billError").html("");

				$("#billMessage").html("You have deleted one record.");

				currBillId = "";

				e.preventDefault();

				$(".textbox").val("");

				$.get("userInfoEdit.php?bill=all", $(this).serialize(), showBill);

			}

		}

		if(buttonName == "createBillBtn"){

			if(billCount > 1){

				$("#billError").html("You can have no more than 2 records.");

				$("#billMessage").html("");

				currBillId = "";

				e.preventDefault();					

			}

			if(billCount < 2){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

					$("#billError").html("Please make sure every text box has content.");

					$("#billMessage").html("");

					currBillId = "";

					e.preventDefault();					

				}

				if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

					$.post("userInfoEdit.php?createBill=yes",$(this).serialize(), showBill);	

					$(".textbox").val("");

					$("#billMessage").html("You have created new Billing address.");

					$("#billError").html("");

					currBillId = "";

					e.preventDefault();						

				}

			}

		}

		if(buttonName == "updateBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();					

			}

			if(currBillId !== ""){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

				$("#billError").html("Please make sure every text box has content.");

				$("#billMessage").html("");

				e.preventDefault();					

				}

			if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

				$.post("userInfoEdit.php?updateBill=" + currBillId,$(this).serialize(), showBill);	

				$(".textbox").val("");

				$("#billMessage").html("You have updated your billing address.");

				$("#billError").html("");

				currBillId = "";

				e.preventDefault();					

				}			

			}

		}

		var payNameBox = $("#cardHolder").val();

		var cardNumBox = $("#cardNum").val();

		var cardExpBox = $("#cardExp").val();

		var cardTypeBox = creditcardtype;	

		//create, update, or delete payment

		if(buttonName == "deletePayBtn"){

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();

			}

			if(currPayId !== ""){

				$.post("userInfoEdit.php?deletePay=" + currPayId, $(this).serialize(), showPay);

				$("#payError").html("");

				$("#payMessage").html("You have deleted one record.");

				e.preventDefault();

				currPayId = "";

				$(".textbox").val("");

				$.get("userInfoEdit.php?payment=all", $(this).serialize(), showPay);

				

			}			

		}

		if(buttonName == "createPayBtn"){

			console.log(cardTypeBox);

			if(payCount > 1){

				$("#payError").html("You can have no more than 2 records.");

				$("#payMessage").html("");

				currPayId = "";

				e.preventDefault();					

			}

			if(payCount < 2){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == "" || cardTypeBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

				}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== "" && cardTypeBox !== ""){

					$.post("userInfoEdit.php?createpay=yes",$(this).serialize(), showPay);	

					$(".textbox").val("");

					$("#payMessage").html("You have created new Billing address.");

					$("#payError").html("");

					currPayId = "";

					e.preventDefault();						

				}

			}			

		}

		if(buttonName == "updatePayBtn"){		

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();					

			}

			if(currPayId !== ""){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

					}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== ""){

					

					if(!cardExpBox.match(/^(0[1-9]|1[0-2])[-][1-9][7-9]$/)){

						document.getElementById('payError').innerHTML = "Please enter Expire date by mm-yy";

						$("#payMessage").html("");

						e.preventDefault();	

					} 

					else{

							var dValue = cardExpBox.split('-');

							var d = new Date();

							var year = parseInt(dValue[1], 10) + 2000;

							var month = parseInt(dValue[0], 10);

							var currentYear = d.getFullYear();

							var currentMonth = d.getMonth() + 1;	

							if(year < currentYear || (month < currentMonth && year == currentYear)){

								document.getElementById('payError').innerHTML = "Your expire date has passed."; 

								$("#payMessage").html("");

								cardExpBox = "";

								e.preventDefault();	

								}

							else{

								document.getElementById('payError').innerHTML = "";

								$.post("userInfoEdit.php?updatepay=" + currPayId,$(this).serialize(), showPay);	

								$(".textbox").val("");

								$("#payMessage").html("You have updated your payment method.");

								$("#payError").html("");

								currPayId = "";

								e.preventDefault();								

								}

						}						

				}			

			}	

		}

	});

		//Form submit function

	$("#userForm5").submit(function(e){

		var button = $("input[type=submit][clicked=true]").val();

		//Update user name or password

		if(button == "Update Name"){

			var inputName = $("#name").val();

			if(inputName !== "" && inputName.match(RegExp)){

				$.post("userInfoEdit.php?edit=name",$(this).serialize(), showUser);	

				$("#message").html("Your name has been updated successfully.");	

				$("#error").html("");

				e.preventDefault();			

			}

			else{

				$("#error").html("Your name should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();		

			}

		}

		if(button == "Update Password"){

			var inputPwd = $("#userPassword").val();

			if(inputPwd !== "" && inputPwd.match(RegExp)){

				$.post("userInfoEdit.php?edit=pwd",$(this).serialize(), showPwd);

				$("#message").html("Your password has been updated successfully.");	

				$("#error").html("");	

				e.preventDefault();				

			}

			else{

				$("#error").html("Your password should only contain letters, numbers or space.");

				$("#message").html("");

				e.preventDefault();					

			}			

		}

		//buttons on bill and traveller panel

		var buttonName = $("input[type=submit][clicked=true]").attr('name');

			var travellerNameBox = $("#travellerName").val();

			var travellerAddBox = $("#travellerAdd").val();

			var travellerCityBox = $("#travellerCity").val();

			var travellerProvBox = $("#travellerProv").val();

			var travellerPostalBox = $("#travellerPostal").val();	

			var travellerPhoneBox = $("#travellerPhone").val();	

			var travellerIdTypeBox = $("#travellerIdType").val();	

			var travellerIdNumberBox = $("#travellerIdNumber").val();	

		//create, update, or delete traveller info

		if(buttonName == "updateTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please make sure every text box has content.");

					$("#travellerMessage").html("");

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					$.post("userInfoEdit.php?updateTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have Updated successfully.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}			

			}

		}	

		if(buttonName == "createTravellerBtn"){

			if(travellerCount > 1){

					$("#travellerError").html("You can have no more than 2 records.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();					

			}

			if(travellerCount < 2){

				if(travellerNameBox == "" || travellerAddBox == "" || travellerCityBox == "" || travellerProvBox == "" || travellerPostalBox == "" || 

				travellerPhoneBox == "" || 

				travellerIdTypeBox == "" || 

				travellerIdNumberBox == ""){

					$("#travellerError").html("Please do not leave any blank.");

					$("#travellerMessage").html("");

					currTravellerId == "";

					e.preventDefault();	

				}

				if(travellerNameBox !== "" && travellerAddBox !== "" && travellerCityBox !== "" && travellerProvBox !== "" && travellerPostalBox !== "" && 

				travellerPhoneBox !== "" && 

				travellerIdTypeBox !== "" && 

				travellerIdNumberBox !== ""){

					console.log(travellerCount);

					$.post("userInfoEdit.php?createTraveller=yes",$(this).serialize(), showTraveller);	

					$(".textbox").val("");

					$("#travellerMessage").html("You have created new traveller information.");

					$("#travellerError").html("");

					currTravellerId == "";

					e.preventDefault();	

				}					

			}

		}

		if(buttonName == "deleteTravellerBtn"){

			if(currTravellerId == ""){

				$("#travellerError").html("Please select one record on top.");

				$("#travellerMessage").html("");

				e.preventDefault();					

			}

			if(currTravellerId !== ""){

				$.post("userInfoEdit.php?deleteTraveller=" + currTravellerId,$(this).serialize(), showTraveller);	

				$("#travellerMessage").html("You have deleted one record.");

				$("#travellerError").html("");

				currTravellerId == "";

				e.preventDefault();	

				$(".textbox").val("");

				$.get("userInfoEdit.php?traveller=all", $(this).serialize(), showTraveller);	

			}

		}

		var billNameBox = $("#billto").val();

		var billAddrBox = $("#billAddr").val();

		var billCityBox = $("#billcity").val();

		var billProvBox = $("#billprov").val();

		var billPostBox = $("#billpost").val();		

		//create, update or delete bill address

		if(buttonName == "deleteBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();

			}

			if(currBillId !== ""){

				$.post("userInfoEdit.php?deleteBill=" + currBillId, $(this).serialize(), showBill);

				$("#billError").html("");

				$("#billMessage").html("You have deleted one record.");

				currBillId = "";

				e.preventDefault();

				$(".textbox").val("");

				$.get("userInfoEdit.php?bill=all", $(this).serialize(), showBill);

			}

		}

		if(buttonName == "createBillBtn"){

			if(billCount > 1){

				$("#billError").html("You can have no more than 2 records.");

				$("#billMessage").html("");

				currBillId = "";

				e.preventDefault();					

			}

			if(billCount < 2){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

					$("#billError").html("Please make sure every text box has content.");

					$("#billMessage").html("");

					currBillId = "";

					e.preventDefault();					

				}

				if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

					$.post("userInfoEdit.php?createBill=yes",$(this).serialize(), showBill);	

					$(".textbox").val("");

					$("#billMessage").html("You have created new Billing address.");

					$("#billError").html("");

					currBillId = "";

					e.preventDefault();						

				}

			}

		}

		if(buttonName == "updateBillBtn"){

			if(currBillId == ""){

				$("#billError").html("Please select one record on top.");

				$("#billMessage").html("");

				e.preventDefault();					

			}

			if(currBillId !== ""){

				if(billNameBox == "" || billAddrBox == "" || billCityBox == "" || billProvBox == "" || billPostBox == ""){

				$("#billError").html("Please make sure every text box has content.");

				$("#billMessage").html("");

				e.preventDefault();					

				}

			if(billNameBox !== "" && billAddrBox !== "" && billCityBox !== "" && billProvBox !== "" && billPostBox !== ""){

				$.post("userInfoEdit.php?updateBill=" + currBillId,$(this).serialize(), showBill);	

				$(".textbox").val("");

				$("#billMessage").html("You have updated your billing address.");

				$("#billError").html("");

				currBillId = "";

				e.preventDefault();					

				}			

			}

		}

		var payNameBox = $("#cardHolder").val();

		var cardNumBox = $("#cardNum").val();

		var cardExpBox = $("#cardExp").val();

		var cardTypeBox = creditcardtype;	

		//create, update, or delete payment

		if(buttonName == "deletePayBtn"){

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();

			}

			if(currPayId !== ""){

				$.post("userInfoEdit.php?deletePay=" + currPayId, $(this).serialize(), showPay);

				$("#payError").html("");

				$("#payMessage").html("You have deleted one record.");

				e.preventDefault();

				currPayId = "";

				$(".textbox").val("");

				$.get("userInfoEdit.php?payment=all", $(this).serialize(), showPay);

				

			}			

		}

		if(buttonName == "createPayBtn"){

			console.log(cardTypeBox);

			if(payCount > 1){

				$("#payError").html("You can have no more than 2 records.");

				$("#payMessage").html("");

				currPayId = "";

				e.preventDefault();					

			}

			if(payCount < 2){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == "" || cardTypeBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

				}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== "" && cardTypeBox !== ""){

					$.post("userInfoEdit.php?createpay=yes",$(this).serialize(), showPay);	

					$(".textbox").val("");

					$("#payMessage").html("You have created new Billing address.");

					$("#payError").html("");

					currPayId = "";

					e.preventDefault();						

				}

			}			

		}

		if(buttonName == "updatePayBtn"){		

			if(currPayId == ""){

				$("#payError").html("Please select one record on top.");

				$("#payMessage").html("");

				e.preventDefault();					

			}

			if(currPayId !== ""){

				if(payNameBox == "" || cardNumBox == "" || cardExpBox == ""){

					$("#payError").html("Please make sure every text box has content.");

					$("#payMessage").html("");

					e.preventDefault();					

					}

				if(payNameBox !== "" && cardNumBox !== "" && cardExpBox !== ""){

					

					if(!cardExpBox.match(/^(0[1-9]|1[0-2])[-][1-9][7-9]$/)){

						document.getElementById('payError').innerHTML = "Please enter Expire date by mm-yy";

						$("#payMessage").html("");

						e.preventDefault();	

					} 

					else{

							var dValue = cardExpBox.split('-');

							var d = new Date();

							var year = parseInt(dValue[1], 10) + 2000;

							var month = parseInt(dValue[0], 10);

							var currentYear = d.getFullYear();

							var currentMonth = d.getMonth() + 1;	

							if(year < currentYear || (month < currentMonth && year == currentYear)){

								document.getElementById('payError').innerHTML = "Your expire date has passed."; 

								$("#payMessage").html("");

								cardExpBox = "";

								e.preventDefault();	

								}

							else{

								document.getElementById('payError').innerHTML = "";

								$.post("userInfoEdit.php?updatepay=" + currPayId,$(this).serialize(), showPay);	

								$(".textbox").val("");

								$("#payMessage").html("You have updated your payment method.");

								$("#payError").html("");

								currPayId = "";

								e.preventDefault();								

								}

						}						

				}			

			}	

		}

	});

	//get card type value

	$('input[name="cardType"]').on('change', function(){

		creditcardtype = $(this).val();	

		

	});	

	//assign click events to all submit buttons

	$("form input[type=submit]").click(function() {

		

        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");

        $(this).attr("clicked", "true");

	});		

	

	//show user name

	var showUser = function(response){

		for(var i = 0; i < response.length; i++){

			var userName = response[i]["name"];

		}

		$("#userName").html(userName);

		$(".loginUser").html("Welcome " + userName);

	};

	

	//show user password

	var showPwd = function(response){

		for(var i = 0; i < response.length; i++){

			var userpassword = response[i]["password"];

		}

		$("#userPwd").html(userpassword);		

	};

	//Detect if the credit card is all number and length is exactly 16

	$("#cardNum").change(function(){

		var cardnumber = $("#cardNum").val();

		var str = cardnumber.toString();

		if(!isNaN(cardnumber)){

			if(str.length == 16){

			document.getElementById('payError').innerHTML = "";	

			}

			else{

			$("#cardNum").val("");

			document.getElementById('payError').innerHTML = "Please enter valid credit card.";	

			$("#payMessage").html("");

			}

		}

		else{

			$("#cardNum").val("");

			document.getElementById('payError').innerHTML = "Please enter valid credit card.";	

			$("#payMessage").html("");

		}

	});

	//Detect If the expire date is valid

	$("#cardExp").change(function(){

		var dateValue = $("#cardExp").val();

		if(!dateValue.match(/^(0[1-9]|1[0-2])[-][1-9][7-9]$/)){

			document.getElementById('payError').innerHTML = "Please enter Expire date by mm-yy";

			$("#payMessage").html("");

		} 

		else{

		var dValue = dateValue.split('-');

		var d = new Date();

		var year = parseInt(dValue[1], 10) + 2000;

		var month = parseInt(dValue[0], 10);

		var currentYear = d.getFullYear();

		var currentMonth = d.getMonth() + 1;

		if(year < currentYear || (month < currentMonth && year == currentYear)){

			document.getElementById('payError').innerHTML = "Your expire date has passed."; 

			$("#payMessage").html("");

			dateValue = "";

			}

		else{

			document.getElementById('payError').innerHTML = "";

		}

	}

	});	

});
