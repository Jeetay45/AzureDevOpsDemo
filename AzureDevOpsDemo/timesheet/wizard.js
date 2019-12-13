var WizardDemo = function() {
    $("#m_wizard");
    var e, r, i = $("#m_form");
    return {
        init: function() {
			//alert(e.getStep());
            var n;
            $("#m_wizard"), i = $("#m_form"), (r = new mWizard("m_wizard", {
                startStep: 1
            })).on("beforeNext", function(r) {
                !0 !== e.form() && r.stop()
            }), r.on("change", function(e) {
                mUtil.scrollTop()
            }), r.on("change", function(e) {
                1 === e.getStep() && showhideback(1)
            }), r.on("change", function(e) {
                2 === e.getStep() && showhideback(2)
            }), r.on("change", function(e) {
                3 === e.getStep() && showhideback(3)
            }), r.on("change", function(e) {
                4 === e.getStep() && showhideback(4)
            }), e = i.validate({
                ignore: ":hidden",
                rules: {
                    name: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    },
                    phone: {
                        required: !0,
                        phoneUS: !0
                    },
                    address1: {
                        required: !0
                    },
                    city: {
                        required: !0
                    },
                    state: {
                        required: !0
                    },
                    city: {
                        required: !0
                    },
                    country: {
                        required: !0
                    },
                    account_url: {
                        required: !0,
                        url: !0
                    },
                    account_username: {
                        required: !0,
                        minlength: 4
                    },
                    account_password: {
                        required: !0,
                        minlength: 6
                    },
                    account_group: {
                        required: !0
                    },
                    "account_communication[]": {
                        required: !0
                    },
                    billing_card_name: {
                        required: !0
                    },
                    billing_card_number: {
                        required: !0,
                        creditcard: !0
                    },
                    billing_card_exp_month: {
                        required: !0
                    },
                    billing_card_exp_year: {
                        required: !0
                    },
                    billing_card_cvv: {
                        required: !0,
                        minlength: 2,
                        maxlength: 3
                    },
                    billing_address_1: {
                        required: !0
                    },
                    billing_address_2: {},
                    billing_city: {
                        required: !0
                    },
                    billing_state: {
                        required: !0
                    },
                    billing_zip: {
                        required: !0,
                        number: !0
                    },
                    billing_delivery: {
                        required: !0
                    },
                    accept: {
                        required: !0
                    }
                },
                messages: {
                    "account_communication[]": {
                        required: "You must select at least one communication option"
                    },
                    accept: {
                        required: "You must accept the Terms and Conditions agreement!"
                    }
                },
                invalidHandler: function(e, r) {
                    mUtil.scrollTop(), swal({
                        title: "",
                        text: "There are some errors in your submission. Please correct them.",
                        type: "error",
                        confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                    })
                },
                submitHandler: function(e) {}
            }), (n = i.find('[data-wizard-action="submit"]')).on("click", function(r) {
                r.preventDefault(), e.form() && (mApp.progress(n), i.ajaxSubmit({
                    success: function() {
                        mApp.unprogress(n), swal({
                            title: "",
                            text: "The application has been successfully submitted!",
                            type: "success",
                            confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                        })
                    }
                }))
            })
        }
    }
}();
jQuery(document).ready(function() {
    WizardDemo.init()
});

function showhideback(nump){
	if(nump==1){
		jQuery("#idback").hide();
	} else {
		jQuery("#idback").show();	
	}
	
	if(nump==4){
		jQuery("#idsubmit").show();
		jQuery("#idsubcon").hide();
	} else {
		jQuery("#idsubmit").hide();	
		jQuery("#idsubcon").show();		
	}
}

 