'use strict';

importScripts('serviceworker-cache-polyfill.js');
importScripts('bower_components/sw-toolbox/sw-toolbox.js');
importScripts('cachefiles.js');


toolbox.precache(filesToCache);

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
// console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
console.log(event.request.url);
return response || fetch(event.request);
})
);
});

toolbox.options.debug =true;

//clients
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients/, toolbox.cacheFirst, {});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/accounts/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges?limit=5&offset=0/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/datatables/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/runreports\/{reportName}/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/{resource}\/{resourceId}\/notes/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/{entityType}\/{entityId}\/documents/,toolbox.cacheFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}/, toolbox.cacheFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}/, toolbox.networkOnly,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers\/template/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers\/{identifierId}/, toolbox.cacheFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers/,toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers\/{identifierId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/identifiers\/{identifierId}/, toolbox.networkOnly,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/images/, toolbox.cacheFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/images/, toolbox.networkOnly,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/images/, toolbox.networkOnly,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/images/, toolbox.networkOnly,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions\/1?command=update/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions\/1?command=delete/, toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions\/{standingInstructionId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructionrunhistory/, toolbox.cacheFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accounttransfers/, toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accounttransfers/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accounttransfers\/{transferId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accounttransfers\/templateRefundByTransfer/,toolbox.cacheFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges/,toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/api\/v1\/clients\/{clientId}\/charges?limit=5&offset=0/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}/, toolbox.cacheFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}/, toolbox.networkOnly,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}?command=paycharge/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}?command=waive/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/charges\/{clientChargeId}?command=undo/,toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/transactions?limit=5&offset=0/,toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/transaction\/{transactionId}/,toolbox.cacheFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}\/transactions\/{transactionId}?command=undo/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=activate/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=close/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=reject/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=withdraw/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=reactivate/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=assignStaff/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=unassignStaff/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=proposeTransfer/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=withdrawTransfer/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=rejectTransfer/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=acceptTransfer/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=proposeAndAcceptTransfer/,toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/{clientId}?command=updateSavingsAccount/,toolbox.networkFirst,{});


//Loans

toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans?command=calculateLoanSchedule/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=approve/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=undoApproval/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=assignLoanOfficer/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=unassignLoanOfficer/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=reject/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=withdrawnByApplicant/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=disburse/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=disburseToSavings/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=undoDisbursal/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}?command=recoverGuarantees/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=repayment/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=waiveInterest/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=writeoff/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=undowriteoff/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=prepayLoan/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=recoverypayment/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions\/{transactionId}/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=refundByCash/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions?command=foreclosure/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/charges/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/charges\/{chargeId}?command=pay/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/guarantors/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/collaterals/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/rescheduleloans/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/rescheduleloans\/{requestId}?command=reject/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/rescheduleloans\/{requestId}?command=approve/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/1\/schedule?command=calculateLoanSchedule/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/1\/schedule?command=addVariations/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/1\/schedule?command=deleteVariations/, toolbox.networkFirst,{});

//Loans get request

toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions\/{transactionId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/charges\/{chargeId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/guarantors/, toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/guarantors\/{guarantorId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/collaterals/, toolbox.networkFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/collaterals\/{collateralId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/rescheduleloans\/{requestId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/rescheduleloans\/{requestId}?command=previewLoanReschedule/, toolbox.cacheFirst,{});



//loans put request

toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/charges\/{chargeId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/guarantors\/{guarantorId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/collaterals\/{collateralId}/, toolbox.networkFirst,{});

//loans delete request

toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/charges\/{chargeId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/guarantors\/{guarantorId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/collaterals\/{collateralId}/, toolbox.networkFirst,{});


//Template

toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/clients\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/groups\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loanproducts\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loanproducts\/template?isProductMixTemplate=true/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/template?templateType=individual&clientId=1/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/loans\/{loanId}\/transactions\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/charges\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/offices\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/hooks\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/audits\/searchtemplate/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/reports\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/savingsproducts\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/savingsaccounts\/template?clientId={clientId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/savingsaccounts\/{accountId}\/transactions\/template/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/standinginstructions\/template?fromAccountType=2&fromOfficeId=1/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accounttransfers\/template?fromAccountType=2&fromOfficeId=1/, toolbox.cacheFirst,{});


//Users
//post requests
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/authentication?username=mifos&password=password/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/oauth\/token?username={username}&password={password}&client_id={clientId}&grant_type={grant_type}&client_secret={client_secret}/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}?command=enable/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}?command=disable/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/userdetails?access_token={access_token}/, toolbox.networkFirst,{});

//GET requests users

toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users/, toolbox.cacheFirst, {});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users\/{userId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}\/permissions/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/permissions/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/passwordpreferences\/template/, toolbox.cacheFirst,{});

//put requests users

toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users\/{userId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}\/permissions/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/permissions/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/passwordpreferences\/template/, toolbox.networkFirst,{});

//delete requests users
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/users\/{userId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/roles\/{roleId}/, toolbox.networkFirst,{});

//user end

//Accounting

//post requests

toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glaccounts/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glclosures/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/journalentries/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/journalentries?command=updateRunningBalance/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/journalentries\/{transactionId}?command=reverse/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/financialactivityaccounts/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/runaccruals/, toolbox.networkFirst,{});
toolbox.router.post(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/provisioningentries/, toolbox.networkFirst,{});

//Accounting get requests

toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glaccounts/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glaccounts\/{glaccountsId}/, toolbox.cacheFirst,{})
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glclosures/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glclosures\/{glclosureId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/journalentries?transactionId=PB37X8Y21EQUY4S/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/journalentries\/{entryId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules\/{accountingruleId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/financialactivityaccounts/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/financialactivityaccounts\/{financialactivityaccountId}/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/provisioningentries/, toolbox.cacheFirst,{});
toolbox.router.get(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/provisioningentries\/{privisioningEntryId}/, toolbox.cacheFirst,{});


// Accounting PUT requests

toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glaccounts\/{glaccountId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glclosures\/{glclosureId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules\/{accountingruleId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/financialactivityaccounts\/{financialactivityaccountId}/, toolbox.networkFirst,{});
toolbox.router.put(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/provisioningentries\/{provisioningEntryId}?command=recreateprovisioningentry/, toolbox.networkFirst,{});


//Accounting delete requests

toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glaccounts\/{glaccountId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/glclosures\/{glclosureId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/accountingrules\/{accountingruleId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/financialactivityaccounts\/{financialactivityaccountId}/, toolbox.networkFirst,{});
toolbox.router.delete(/^https:\/\/demo.openmf.org\/fineract-provider\/api\/v1\/provisioningentries\/{provisioningEntryId}?command=createjournalentry/, toolbox.networkFirst,{});

// accounting end















































