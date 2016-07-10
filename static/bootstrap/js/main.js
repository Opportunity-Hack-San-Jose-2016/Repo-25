$(document).ready(function() {
    console.log("ready!");
    $("[name='three']").bootstrapSwitch();
    $("[name='bmp']").bootstrapSwitch();
    $("[name='hud2']").bootstrapSwitch();
    $("[name='assets2']").bootstrapSwitch();
    $("[name='contact']").bootstrapSwitch();
    
    
    $("#number-household").hide();
    $("#household-income").hide();
    $("#first-mortgage").hide();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
});

function homebuyerYes() {
    $("#number-household").show();
    $('.test').attr('selected', 'selected');
    $("#household-income").hide();
    $("#first-mortgage").hide();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function homebuyerNo() {
    $("#not-eligible").show();
    $("#number-household").hide();
    $("#household-income").hide();
    $("#first-mortgage").hide();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function householdIncomeYes() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").hide();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function householdIncomeNo() {
    $("#first-mortgage").show();
    $('#first_mortgage').attr('checked',false);
    $("#number-household").show();
    $("#household-income").show();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function firstMortgageYes() {
    $("#FICO-score").show();
    $('#FICO').attr('checked',false);
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function firstMortgageNo() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").hide();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function ficoScoreYes() {
    $("#short-sale").show();
    $('#short_sale').attr('checked',false);
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function ficoScoreNo() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").hide();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function shortSaleYes() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#forclosure").hide();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function shortSaleNo() {
    $("#forclosure").show();
    $('#forclosure').attr('checked',false);
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#financial-assets").hide();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function forclosureYes() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#forclosure").show();
    $("#financial-assets").hide();
    $("#eligible").hide();
}

function forclosureNo() {
    $("#financial-assets").show();
    $('#financial_assets').attr('checked',false);
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#forclosure").show();
    $("#not-eligible").hide();
    $("#eligible").hide();
}

function financialAssestsYes() {
    $("#not-eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#forclosure").show();
    $("#financial-assets").show();
    $("#eligible").hide();
}

function financialAssestsNo() {
    $("#eligible").show();
    $("#number-household").show();
    $("#household-income").show();
    $("#first-mortgage").show();
    $("#FICO-score").show();
    $("#short-sale").show();
    $("#forclosure").show();
    $("#financial-assets").show();
    $("#not-eligible").hide();
}

function getMemberCount(members) {
    $('#household_income').attr('checked',false);
    if (members == 1) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$89,950");
    }
    else if (members == 2) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$102,800");
    }
    else if (members == 3) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$115,650");
    }
    else if (members == 4) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$128,500");
    }
    else if (members == 5) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$138,800");
    }
    else if (members == 6) {
        $("#number-household").show();
        $("#household-income").show();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("$149,050");
    }
    else {
        $("#number-household").show();
        $("#household-income").hide();
        $("#first-mortgage").hide();
        $("#FICO-score").hide();
        $("#short-sale").hide();
        $("#forclosure").hide();
        $("#financial-assets").hide();
        $("#not-eligible").hide();
        $("#eligible").hide();
        $("#limit-income").html("0");
    }
}