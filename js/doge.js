$(function() {
    $.get( "http://dogechain.info/chain/Dogecoin/q/getreceivedbyaddress/D5tTkJEw3C6SZxS4wPDRNH2Zm2nzNYEvH1", function( data ) {
        $( ".raised" ).html( numberWithCommas(data) );
    });
});

function numberWithCommas(x) {
    var parts = x.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
