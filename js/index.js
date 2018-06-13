{
  $('.tab').on('click',function(){
    var now = $(this).index()
    $(this).toggleClass('tab_off')
    $(this).parent('.condition').toggleClass('condition_on')
    $(this).siblings().children('.hide_tab').stop().slideToggle()
    // var now = $(this).index()
    // $(this).toggleClass('condition_on')
    // $('.tab').eq(now).toggleClass('tab_off')
    // $('.hide_tab').eq(now).stop().slideToggle()
  })
  
  var apiurl = ''
  $.ajax({
    url: 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',
    async: true,
    cache: true,
    crossDomain: true,
    method: "GET",
    datatype: 'json',
  }).done(function(res){
    console.log(res)
  }).fail(function(err){
    console.log('fail')
  })

}

// https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97