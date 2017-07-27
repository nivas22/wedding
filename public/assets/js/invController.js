z.controller('contentControl',function($scope,$translate,$rootScope){
	$scope.name ="dsfdsf";
	//$translateProvider.preferredLanguage('en');
	$translate.use('en');
	$scope.selecTamil =false;
	$scope.selecEnglish = true;
	$scope.selecMal =false;

	clear();
	playAudio();
	loadText();


	function playAudio () {
			//  var audio = new Audio('mp3/1.mp3');
			//  audio.play();
	 };



	$scope.changeLanguage = function(tag){
		//alert(tag);
		$scope.selecTamil =false;
		$scope.selecEnglish = false;
		$scope.selecMal =false
		$translate.use(tag);
		if(tag === 'en'){
			$scope.selecEnglish = true;
		}else if (tag ==='tn'){
			$scope.selecTamil =true;
		}else{
			$scope.selecMal =true
		}
		loadText();
};


$scope.sendEnquiry = function(){
		$scope.customerInfo ={
		'name':$scope.name,
		'numberOfGuest':$scope.numberOfGuest,
		'eventAttending':$scope.eventAttending,
		'message':$scope.message
	}
		addCustomerInfo($scope.customerInfo);
		clear();
		alert("Thanks for your response...")
	};

function clear(){
	$scope.name = '';
	$scope.message = '';
	$scope.numberOfGuest = '';
	$scope.eventAttending = '';
}

	function loadText(){
		$scope.Title =$translate.instant("Title");
		$scope.H1 =$translate.instant("H1");
		$scope.H2 =$translate.instant("H2");
		$scope.H3 =$translate.instant("H3");
		$scope.H4 =$translate.instant("H4");
		$scope.H5 =$translate.instant("H5");
		$scope.H6 =$translate.instant("H6");
		$scope.H7 =$translate.instant("H7");
		$scope.H8 =$translate.instant("H8");

		$scope.Hero_Name =$translate.instant("Hero_Name");
		$scope.Heroine_Name=$translate.instant("Heroine_Name");
		$scope.Label_Fun=$translate.instant("Label_Fun");
		$scope.Top_Quote=$translate.instant("Top_Quote");

		$scope.groom_intro=$translate.instant("groom_intro");
		$scope.bride_intro=$translate.instant("bride_intro");
		$scope.first_meet =$translate.instant("first_meet");
		$scope.h3_head =$translate.instant("h3_head");
		$scope.phone_conv=$translate.instant("phone_conv");
		$scope.gift=$translate.instant("gift");

		$scope.engagement=$translate.instant("engagement");
		$scope.HH1=$translate.instant("HH1");
		$scope.HH2=$translate.instant("HH2");
		$scope.HH3=$translate.instant("HH3");
		$scope.HH4=$translate.instant("HH4");
		$scope.HH5=$translate.instant("HH5");
		$scope.HH6=$translate.instant("HH6");

		 $scope.r11=$translate.instant("r11");
		 $scope.r12=$translate.instant("r12");
		 $scope.r13=$translate.instant("r13");

		 $scope.r21=$translate.instant("r21");
		 $scope.r22=$translate.instant("r22");
		 $scope.r23=$translate.instant("r23");

		 $scope.r31=$translate.instant("r31");
		 $scope.r32=$translate.instant("r32");
		 $scope.r33=$translate.instant("r33");

		 $scope.r41=$translate.instant("r41");
		 $scope.r42=$translate.instant("r42");
		 $scope.r43=$translate.instant("r43");

		 $scope.r51=$translate.instant("r51");
		 $scope.r52=$translate.instant("r52");
		 $scope.r53=$translate.instant("r53");

		 $scope.e0 =$translate.instant("e0");
		 $scope.e1 =$translate.instant("e1");
		 $scope.e2 =$translate.instant("e2");
		 $scope.e3 =$translate.instant("e3");
		 $scope.e11 =$translate.instant("e11");
		 $scope.e12 =$translate.instant("e12");
		 $scope.e13 =$translate.instant("e13");
		 $scope.edate =$translate.instant("edate");

		 $scope.rs1 =$translate.instant("rs1");
		  $scope.rs2 =$translate.instant("rs2");
			$scope.rs3 =$translate.instant("rs3");
			$scope.rs4 =$translate.instant("rs4");
			$scope.rs5 =$translate.instant("rs5");

			$scope.fng_title =$translate.instant("fng_title");
 		  $scope.fng1 =$translate.instant("fng1");
 			$scope.fng2 =$translate.instant("fng2");
 			$scope.fng3 =$translate.instant("fng3");
 			$scope.fng4 =$translate.instant("fng4");

			$scope.fe_title =$translate.instant("fe_title");
 		  $scope.fe1 =$translate.instant("fe1");
 			$scope.fe2 =$translate.instant("fe2");
 			$scope.fe4 =$translate.instant("fe4");

				$scope.i_am_attend =$translate.instant("i_am_attend");
				$scope.name_placeholder =$translate.instant("name_placeholder");
				$scope.msg_placeholder =$translate.instant("msg_placeholder");


		$scope.Second_Heading=$translate.instant("Second_Heading");
		$scope.Line_One=$translate.instant("Line_One");
		$scope.Sub_Quote=$translate.instant("Sub_Quote");
		$scope.Label_Hero=$translate.instant("Label_Hero");
		$scope.Label_Heroine=$translate.instant("Label_Heroine");
		$scope.Label_Day=$translate.instant("Label_Day");
		$scope.Mrg_Day=$translate.instant("Mrg_Day");
		$scope.Label_Invitaiton=$translate.instant("Label_Invitaiton");
		$scope.Labe_U=$translate.instant("Labe_U");
		$scope.Label_Description=$translate.instant("Label_Description");
		$scope.Label_Address =$translate.instant("Label_Address");
		$scope.Label_venue  =$translate.instant("Label_venue");
		$scope.Label_Location =$translate.instant("Label_Location");
		$scope.Label_District=$translate.instant("Label_District");
		$scope.Footer=$translate.instant("Footer");
	}

	function addCustomerInfo(customerInfo) {
	    var newcourseKey = firebase.database().ref().child('customerInfo').push().key;
	    customerInfo.id = newcourseKey;
	    var updates = {};
	    updates['/customerInfo/' + newcourseKey] = customerInfo;
	    return firebase.database().ref().update(updates);
  }
});

z.filter('nl2br', ['$sce', function ($sce) {
			return function (text) {
					return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
			};
	}]);
