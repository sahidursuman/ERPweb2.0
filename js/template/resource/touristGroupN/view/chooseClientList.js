/*TMODJS:{"version":11,"md5":"a1e2fadee9588b98b89f780ed72409c4"}*/
define(function(require){return require("../../../template")("resource/touristGroupN/view/chooseClientList",function(a){"use strict";var b=this,c=b.$helpers,d=b.$each,e=a.travelAgencyList,f=(a.rs,a.$index,b.$escape),g="";return d(e,function(a){g+=' <tr class="cursor" data-id="',g+=f(a.travelAgencyId),g+='" data-contact-id="',g+=f(a.fromPartnerAgencyContactId),g+='"> <td name="travelAgencyName">',g+=f(a.travelAgencyName),g+="</td> <td>",g+=f(c.getTravelAgencyType(a.type)),g+="</td> <td>",g+=f(c.getTravelAgencyLevel(a.level)),g+="</td> <td>",g+=f(a.contactRealname),g+="</td> <td>",g+=f(a.contactMobileNumber),g+='</td> <td> <input type="radio" name="chooseClient" class="ace"> <label class="lbl"></label> </td> </tr> '}),new String(g)})});