/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["fonts/FontAwesome.otf","3b15120c304688379525c9f3c15cc4c2"],["fonts/fontawesome-webfont.eot","90186830c9c50a0fed932494581761d9"],["fonts/fontawesome-webfont.svg","776d58f453c8fe5d6a89e9c31ee223ff"],["fonts/fontawesome-webfont.ttf","4f0022f25672c7f501c339cbf98d9117"],["fonts/fontawesome-webfont.woff","fdf491ce5ff5b2da02708cd0e9864719"],["global-translations/locale-br.json","be696e329b24351162cd1bd1ffe19767"],["global-translations/locale-cs.json","3aa55a85f02e51e31762ad98ceaa4230"],["global-translations/locale-en.json","6b1635762991b1147628ef21229034f9"],["global-translations/locale-es.json","f100c1ac93bcea493eb214104c4e1052"],["global-translations/locale-fr.json","58df48086716e9c060f69f19947a4198"],["global-translations/locale-hi.json","f3dcd68e7f57d558a9334a706ec793e1"],["global-translations/locale-id.json","2a38b6142f771e38349e2ed9c2d860b1"],["global-translations/locale-ka.json","b0e52f1a0b04d4ec8ed17644fdedfe04"],["global-translations/locale-km.json","ce43c0fab2b3224aa9fa5d5edcc0bb51"],["global-translations/locale-lo.json","12f0dc95f109fb82fda0278b3ed3e9a7"],["global-translations/locale-lt.json","eb07fb04b52263aa70d5cff6b80ed68f"],["global-translations/locale-ne.json","5c3e0c10e476be82debb57959adc3bc5"],["global-translations/locale-oc.json","e4b61f0beb08961845a58cae9c35086f"],["global-translations/locale-pl.json","09280108d03ccdfb7cf7cbd991db6dfd"],["global-translations/locale-pt.json","260ce1b42107b3c40ef14e5e2125a0c8"],["global-translations/locale-qqq.json","c9d547c85acad5fa2e31cb8df1f5c2c3"],["global-translations/locale-sv.json","ba17debbf0fe6056f9d73438a3305374"],["global-translations/locale-uk.json","cd826582bba53caa81397fe8b89f15e3"],["global-translations/locale-vi.json","ce830e05febfcd9aa723f01600cbf607"],["global-translations/locale-zh_CN.json","4f876285526f7e4543736c9cde4ab18d"],["images/833.svg","ae2dcb43b3525f10ab0657540bb74d94"],["images/MifosX_logo.png","3d2c525ea8a9e143c88cbb2277bf7849"],["images/MifosX_logoSmall.png","a52b6dc56e73d0402c34d8ab29b5cbf7"],["images/chosen-sprite.png","8e70d120437ffc6a1bf7cebeca292d5c"],["images/client-image-placeholder.png","644a4fbfccb7eb50cdf95e38abacaaba"],["images/cubic_loader.gif","5f257f33ac25edd3cfa8316777320b52"],["images/favicon.ico","f582f3395af9490cd8c37388a7e650d7"],["images/loader.gif","25dbf50ac1bae9f2d7747f293dfbce8f"],["images/logo.jpg","7ca568d1810b7aab589ec3ae6bece3c1"],["images/mifos-logo-flat.png","c2a0eda0f0f33af13538c80448533131"],["images/mifos_lg-logo.jpg","0c582e9a7fa8c4397ab37fa9bc2fa983"],["images/ring.svg","8e3c5425bfc10ca292998e939b933879"],["images/small-loader.gif","a5582413ec37b99819c26301c4d45b3e"],["images/user_new.png","df7dd2a0400263d63977af0541dd0ed6"],["index.html","fe9924c2ce3b75db8bea63e018973740"],["manifest.json","74858c27e2b2dc2b0c7347cd69daba27"],["release.json","708851e2f529c701d3c290a2bb2c896b"],["scripts/config/LogoConfig.json","d41d8cd98f00b204e9800998ecf8427e"],["scripts/config/UIconfig.json","2330ed28f93203ca5dc5d8c049a15a69"],["scripts/controllers/controllers.d657a2e7.js","d657a2e7cfb77878bae582190ece8a81"],["scripts/directives/directives.a824a551.js","a824a5512f6760059128378ce353b41e"],["scripts/filters/filters.34474998.js","34474998689027ca22d40a4831c193c0"],["scripts/loader.210d568e.js","7764436c638bb7e7623b62dc5e66254f"],["scripts/mifosX.js","5ba5d6f76603b0033e6f86c9be4a29eb"],["scripts/mifosXComponents.3d29ab7d.js","993c5f630e57b0c6bd299db94dd33cee"],["scripts/mifosXStyles.f173574a.js","f173574a103ecf2e85c62349c2bfbb61"],["scripts/models/models.f74aacf1.js","f74aacf17494cb789110dbc89575fe2c"],["scripts/modules/KeyboardManager.js","29c973713db5124f1e5d1af99713b03c"],["scripts/modules/angular-wizard.js","57d4473f5978e316f2d77a42089add67"],["scripts/modules/angularjs-nvd3-directives.js","6dcc80521e82774df111923ea47ef29d"],["scripts/modules/chosen.jquery.min.js","1c37b44be20644594e8f1ebeac6e9c45"],["scripts/modules/configurations.js","126e529d2b784c1057176e4420934695"],["scripts/modules/csv.js","3f3d4dd96dbe8aff8f085c9a18d639d7"],["scripts/modules/datepicker.js","1481c93c7b0a9cab14cbcfe3dc5054f6"],["scripts/modules/localstorage.js","8a5d071d49865f5d141965de8e35fc29"],["scripts/modules/notificationWidget.js","562827e8847b783c5dca1a50241922e7"],["scripts/routes-initialTasks-webstorage-configuration.0d972d51.js","0d972d5169bd2bd18fa580ced99fed41"],["scripts/services/AuthenticationService.js","00729409beb66d13ac450b4eb3731ff6"],["scripts/services/HttpServiceProvider.js","67171149e38b0ec79e2ad75f12c153e8"],["scripts/services/NotificationResponseHeaderProvider.js","9699037dcaf2c5a0ea7976eec1f6be6a"],["scripts/services/Paginator.js","34d2a744e4151917e2fafa2969d20bcf"],["scripts/services/ResourceFactoryProvider.js","a6305fac65da6c3f0992b6cd1dfa81e2"],["scripts/services/SessionManager.js","8dbd7445a9f225b95559df5eca7e9065"],["scripts/services/UIConfigService.js","509a5da1ed5becd4e1029e1976779770"],["service-worker-registration.js","12f016b04230c58e8e43557574fb834d"],["styles/fontawesome.8f41798f.css","8f41798fcb1a4737e84fec3a07f327f3"],["styles/styles.43d4b3c6.css","43d4b3c6d3f9e56f8cd84ea9fece8150"],["sw-api.js","2e385d1ddd1f43072f0c99935168453f"],["views/_leftnav.html","49013c93991c97f4d61c67b38d87e98c"],["views/_topnavbar.html","1dcceb02154db41e85ad55f528176c49"],["views/accounting/accounting.html","19aacf432a80e45f24dd61edbfb2295a"],["views/accounting/accounting_coa.html","60da5350b899098aa9cae5e409b8cfb9"],["views/accounting/accounting_rules.html","38c33111ddf0d917c510024aebd93b2b"],["views/accounting/accounts_closure.html","a761f8a47d6553ce0d2643ab7b41e343"],["views/accounting/add_acc_rule.html","dd1054fec398c9d3ce12194c11a4505d"],["views/accounting/add_financial_accounting_mapping.html","7db6f3d7a5ea5bf894666fd83db874b9"],["views/accounting/createclosure.html","56306a76691c7c0024a2a595bdfeb2a9"],["views/accounting/createglaccounting.html","7855304537b735e733ec99facc57f30c"],["views/accounting/edit_acc_rule.html","7930817a1ecfc907ba0a9f9fb0e9f06e"],["views/accounting/edit_financial_activity_mapping.html","131c17ce0c8cb7ce290ae54f08232fd3"],["views/accounting/editglaccounting.html","02ae4870e6ba4f79c7b080c5fc32aa98"],["views/accounting/financial_accounting_mapping.html","8638090671cb6ce56d21d75ffe2f5840"],["views/accounting/freqposting.html","f427d51dfb78268137473506bc03fe09"],["views/accounting/journalentry_posting.html","f02df18a6940df2876f214e241a92b00"],["views/accounting/openingbalances.html","dc30bf53383895b275d660fe560ef580"],["views/accounting/periodic_accrual_accounting.html","635277d8c3d0e5fbc57caf5bf61d8f9c"],["views/accounting/provisioning/CreateProvisioningEntries.html","2939b955efbe026499564385f1388b97"],["views/accounting/provisioning/ProvisioningEntries.html","f0367e613f16e6767e940c8c64d50c24"],["views/accounting/provisioning/ViewProvisioningEntry.html","52e49233d49a29eee085e95055300b8a"],["views/accounting/provisioning/ViewProvisioningJournalEntries.html","9c370281f8b7e401a305e943e0b691a7"],["views/accounting/search_transaction.html","c966539f213066c372174a9f6c594335"],["views/accounting/view_acc_rule.html","cc22f27567b72ec37f8678203947f4ed"],["views/accounting/view_close_accounting.html","ec274c93eee02427d34c573c17de5b94"],["views/accounting/view_financial_activity.html","2c556f981d20c4b851962743af214ae1"],["views/accounting/view_transactions.html","2f966e4b4733362b5f28488f761fb5e4"],["views/accounting/viewglaccounting.html","8e80e21ef8cca5069fefd6cb20497029"],["views/accounttransfers/create_standinginstruction.html","c1ab4e6a1ebd87a2a3a32d496ee2df09"],["views/accounttransfers/edit_standinginstruction.html","f5e6c35142480d172ff80f5fe5cc285e"],["views/accounttransfers/list_standinginstruction.html","719605c431b031472a80e6a8ec0485ab"],["views/accounttransfers/list_transactions.html","5fa1636fa33c46a2521f413c0d71264b"],["views/accounttransfers/make_accounttransfer.html","f731fbedf87103fa840d4501f19e5c10"],["views/accounttransfers/standinginstructions_history.html","2e321b53dbcc8cf5a741cd99d19e11a9"],["views/accounttransfers/view_accounttransfer.html","4f576adb2e92b3db7723cd0d38b69a3c"],["views/accounttransfers/view_standinginstruction.html","b666dfcd99af742c25716ca5ae80bc5d"],["views/administration/AddressForm.html","635883f04b9accd6df5b6ea9ec0fb451"],["views/administration/EditAddress.html","76afed8aa0915293965b355e1c9957f3"],["views/administration/addrole.html","b19abbefeb607738da7ba22f72140af7"],["views/administration/createuser.html","9934d427d53e636f3cec4552ce6a5d38"],["views/administration/editExternalServicesConfiguration.html","5a505dc7edc02ef5b12d0878726b40a5"],["views/administration/editGlobalConfiguration.html","8551caa8305eb5a217ee4e2726c2ac29"],["views/administration/edituser.html","f3c47e869c3ff0a4b2f9f637b7ae1dbb"],["views/administration/externalServices.html","859e849f8af3548ec053116bf6426cfb"],["views/administration/global.html","2185d429415cb4cadb2935c5f0488028"],["views/administration/makerchecker.html","13947226329dc489bf023c0516d8643c"],["views/administration/organization.html","520696d100e8f6abaa1d50f0012a0850"],["views/administration/roles.html","de2f5e565b73e3b7d15d3c313d9e0230"],["views/administration/system.html","c5672af8bf8ba0eb36728dacd3e6e9c9"],["views/administration/userFormDialog.html","99ecf6af55c93f3b28343ebae92e41e9"],["views/administration/users.html","74a8e670cd87c2bebfc0818d70f5c1c4"],["views/administration/usersettings.html","2b75b3d06e31e62fe4bac3c4c7d2834f"],["views/administration/userslist.html","4a942a9871d8377909760d4b3aba6a8f"],["views/administration/viewExternalServicesConfiguration.html","389018bdb8236809c56ca64a75a75e46"],["views/administration/viewrole.html","e6617016f4e88364db8a8cc563adf296"],["views/administration/viewuser.html","1ccdda7ffa45bec078ebd60a364b6f35"],["views/centers/centerattendance.html","f1114f742286ac5fbe41047b34d512d3"],["views/centers/centers.html","6d5e73aacb07f2b47b70e99689b7c55e"],["views/centers/closecenter.html","fd2c04e525af41796361ea2aef4162af"],["views/centers/createcenter.html","5baea6c1c6bc91780f0424994e315602"],["views/centers/editcenter.html","7f146058d53f25a9a7ed68ebc10f2daf"],["views/centers/managegroupmembers.html","381c7c422d1e85af0a2d7c499c444804"],["views/centers/viewcenter.html","d82b4e2b4d99a37e7e75348d17d8c10f"],["views/clients/addclientdocument.html","a59b5fb5d7fea2d3f797f7302e8c249f"],["views/clients/addclientidentifier.html","08214a5723c6dcb6e272741011ef14f6"],["views/clients/addclientidentifierdocument.html","3ed2f01df1021feea593b0bf2d2721d6"],["views/clients/addnewclientcharge.html","6ff5a049d9749ef0807e77a81b0f2084"],["views/clients/clientactions.html","a4599537df41177005dc1e98027c3bdf"],["views/clients/clientchargeoverview.html","450b3179185d2908417b7c2132e26f5a"],["views/clients/clients.html","31e032bb0a74d555444fdf75ae738716"],["views/clients/clientscreenreport.html","86a86af1da981b432fed02161452990b"],["views/clients/createclient.html","f3fc33dee4c01467b72aac48c3bdab1e"],["views/clients/editclient.html","f8ef401b2cc464f08d8c978d44100218"],["views/clients/payclientcharge.html","3f68deeca86aacb5191f68f73ec547a1"],["views/clients/survey.html","df23a7b8af95634bca9bdc8974d71131"],["views/clients/test.html","705c43f11a5ac86f8586e584cb7f148c"],["views/clients/transferclient.html","254aa02c965e23174e9cea5f66e3c477"],["views/clients/viewclient.html","150039cc4fcb1295347e2b8b89093227"],["views/clients/viewclientcharge.html","9856656b215a2408d6199db3a20012b1"],["views/collection/collectionsheet.html","03998c88c28e121df3cdc50c15c0ff1d"],["views/collection/individualcollectionsheet.html","91b0f2363c492dbba7bdadc597b6371f"],["views/collection/productivecollectionsheet.html","fd29ea17d42c3e5deb67206fb66031dd"],["views/deposits/fixed/add_new_fixed_deposit_charge.html","5988de99baeb39cd22929f4d1ad9a37e"],["views/deposits/fixed/edit_account_application.html","05522f25ddf79fb14c734edda31a7531"],["views/deposits/fixed/fixed_deposit_account_actions.html","aacf6fc2a7282828456db43689006d18"],["views/deposits/fixed/newapplication.html","95baab62f2423eb3e2e3eb6d7c8709f2"],["views/deposits/fixed/view_fixed_deposit_transaction.html","3b77b668092e08d5c18fa8fc52d1137f"],["views/deposits/fixed/viewaccountdetails.html","2b566db1186217fb1895b16325e8a57a"],["views/deposits/recurring/add_new_recurring_deposit_charge.html","f820ad10d051e8e1c89d5e4fdb7299e5"],["views/deposits/recurring/edit_account_application.html","ccafce6a29ea3a37a9fe8d86acfaf41f"],["views/deposits/recurring/newapplication.html","30b6a3a4314fcc187f2de8e5a169661a"],["views/deposits/recurring/recurring_deposit_account_actions.html","35157e3184af96c4660cd8a75f627548"],["views/deposits/recurring/view_recurring_deposit_transaction.html","943cdd798ae9faf227d39e4d5c05c75f"],["views/deposits/recurring/viewaccountdetails.html","8252bc2d6a6428238bab1e08d1f6e601"],["views/footer.html","6065748307fefcb9df56f8e31cf1b551"],["views/groups/addrole.html","e82183a575a60d6f3c6332595420a6d6"],["views/groups/assignstaff.html","65eaa724abf18f4c644b5265dd8f5b85"],["views/groups/attachmeeting.html","104da49f53654ac72ce653e4383dd536"],["views/groups/closegroup.html","4d19eea2c797d22f774fc50f79e8556d"],["views/groups/creategroup.html","5b2daf9eaff618047b0af93cdaa420c7"],["views/groups/editgroup.html","5c4901443ae2fcc85a2a0d12e9dea084"],["views/groups/editmeeting.html","0b23006a15255caacd2cd3340691a68a"],["views/groups/editmeeting_based_on_meeting_date.html","a3296f312f7b60c232b34beb36317aa1"],["views/groups/groupattendance.html","5922248208723e29036e675551595fd5"],["views/groups/groups.html","55ec1c8c139070044c4ae5ad6d5d531a"],["views/groups/membermanage.html","1374d151220c5e4aed77a68f137559c7"],["views/groups/transferclients.html","5bf99a702ca9e64b32d49db721bb60a7"],["views/groups/viewgroup.html","b5faf5f0b279781a7104975f83e565d4"],["views/header.html","9ea6ebb01cd74390d68344a60e166a6d"],["views/help.html","21ed52881d5d05166cac0d3c74caf48d"],["views/home.html","d25dafbf63d64b5a06312337d370d808"],["views/loans/AdjustRepaymentSchdule.html","c83661aea6ac8d4c867d6883d2549434"],["views/loans/addloancharge.html","358580a0ac7a2849ae97ee9c0a3ce1e7"],["views/loans/addloancollateral.html","8cd5cbcc3bc8cd09dbabb9d9a1c98fc9"],["views/loans/addloandocument.html","dd1a397b7f5cc638b04705be59fc717d"],["views/loans/approveloanreschedule.html","c81871df7b11dd6d20cb2817e62a7e8d"],["views/loans/assignloanofficer.html","d2a851e1769a663ff4ec3e4abfcc893b"],["views/loans/editguarantor.html","9228bcfe90e596052f12ccfb2e94aa84"],["views/loans/editloanaccount.html","abb1fc8c7f1ce39ac5c1ddd52726f851"],["views/loans/editloancharge.html","29000b8fba848481a4d0a6f3ebb66cb3"],["views/loans/editloancollateral.html","448974e94cfd0dd3de23da65ebe4d71c"],["views/loans/guarantor.html","4ff5249e83b4efd66a4967485f707c22"],["views/loans/list_guarantor.html","e65728ec76cd9a554d3dd7bfbb0a6271"],["views/loans/loanaccountactions.html","846ffd2550021178b43d72f22e93fb76"],["views/loans/loanforeclosure.html","8dcc8de29d99903a63bdcdd8bceb0e44"],["views/loans/loanscreenreport.html","fcafd1839ae9318f14f4b743e749b463"],["views/loans/newjlgloanaccount.html","0c61addc5c9e02e94f87f0c94aafb5f9"],["views/loans/newloanaccount.html","94898b5d17b98a1f4bfc2ce68b7bb482"],["views/loans/previewloanrepaymentschedule.html","72a21ba4d71607a05f6f19d872fcad13"],["views/loans/rejectloanreschedule.html","923bdcc88ce40d5ed72b8069ac201fa2"],["views/loans/rescheduleloans.html","12f100ec70561dc5c5848d3f3cd4c7ab"],["views/loans/view_loan_transaction.html","c61f8e205fd27e09c1c7bc24bb3bb5e4"],["views/loans/viewloanaccountdetails.html","fb17bc9cfc3123cb4337dc4b5451659e"],["views/loans/viewloancharge.html","4f1c7972c1dc8b41a6c037997684cb30"],["views/loans/viewloancollateral.html","b105df1010739f7696b4b5fe9c2bb7bc"],["views/loans/viewreschedulerequest.html","bca1da2f902d36e0c0427c97039acc33"],["views/login.html","cd19f36ddc341a17ee616b4b07671770"],["views/navigation/offices.html","d3fed571a5ab31d0e89e632ca13b41f8"],["views/notification/notifications.html","16251c534f24ea4278810620641e0616"],["views/organization/bulkloan.html","6ca8407782995fd0b93c73945c2e5cd0"],["views/organization/cashmgmt/cashierFundsAllocationSettlement.html","1bbdd575ea711da517cf52444cce8ac9"],["views/organization/cashmgmt/cashierTransactions.html","381fd0783edf16327f66a85cf5ee200a"],["views/organization/cashmgmt/cashiersForTeller.html","4822b7405cb3bb881ba0e516f1a808a9"],["views/organization/cashmgmt/createCashier.html","69530aa954d8826df8fa69855a34af80"],["views/organization/cashmgmt/createTeller.html","e2047d9e5b5dab30d3e9ba3fe1400ea7"],["views/organization/cashmgmt/editTeller.html","e77277d35453aed710a9789fc2070987"],["views/organization/cashmgmt/editcashier.html","9410af396507ff126a9b5c4eb6c3d813"],["views/organization/cashmgmt/tellers.html","1deef45527847434297eae8230c93bb6"],["views/organization/cashmgmt/viewCashiersForTeller.html","81de1da2f61812825b20e0db0d214e61"],["views/organization/cashmgmt/viewTeller.html","daf729b92754fdfa983888cac4150d1f"],["views/organization/createemployee.html","55e5b7f66cc8f0d2f88613e2cae1de1a"],["views/organization/createholiday.html","06e8336a321faa6e6ae8c8ab3fae0437"],["views/organization/createoffice.html","a9d42b43897dd19f8d06d919a2c900a3"],["views/organization/createpaymenttype.html","55eabbb71692d4c354b119f83dd05b40"],["views/organization/currencyconfig.html","f72fe7c2e2eaf7215a822e5530826cd2"],["views/organization/editemployee.html","7fcdb0bab616cb0dce7b7309b2215e20"],["views/organization/editholiday.html","790eb4618e7b8436163fb0dd6961e7db"],["views/organization/editoffice.html","ee50ac1b7dae70519381eaf359c1aa04"],["views/organization/editpaymenttype.html","1c2912a9a7aa6b2b31313d9c1280d2e1"],["views/organization/employees.html","e7b2d7f373292f8118f45602a58fbeb4"],["views/organization/entitydatatablechecks/entitydatatablechecks.html","d3ca09b127f14355905b2c8b7b1258c1"],["views/organization/holidays.html","b7bc022cf54a38816e8d709a5eb5a5c0"],["views/organization/managefunds.html","9f4fc646c9d05f5ae631399c09010d56"],["views/organization/offices.html","bafb7bd1ab9eb071b5dfe54486d16874"],["views/organization/passwordpreferences.html","037107601cbc6dd9101621edce7c3a74"],["views/organization/provisioning/CreateProvisioningCriteria.html","56901a923669d3b6915f658e55b9547b"],["views/organization/provisioning/EditProvisioningCriteria.html","9c455fd6bb7670ee936c6444835c8fb8"],["views/organization/provisioning/ViewAllProvisioningCriteria.html","7bcb70ba494bcc050d86dd0d3901c2d9"],["views/organization/provisioning/ViewProvisioningCriteria.html","5fb4e203fad2b4828eb2e8a7e5abb7b8"],["views/organization/smscampaigns/createsmscampaign.html","142122b104dbdcfc0ea50b9a73cb6563"],["views/organization/smscampaigns/editsmscampaign.html","a0f9c75ff7f84404cfab0a81d833447f"],["views/organization/smscampaigns/smscampaigns.html","debf0a45c5741424887269f217fb345d"],["views/organization/smscampaigns/viewsmscampaign.html","3b6b8fadd9d606b44fbafb7d254183ec"],["views/organization/viewemployee.html","fbc6c8f326b51cfedcebc1985e35da42"],["views/organization/viewholiday.html","146f4051517ce097b16a0cbef0ae6113"],["views/organization/viewoffice.html","da14344256d4fb9b47d265bf96f41a2c"],["views/organization/viewpaymenttype.html","a530d3babff519d7add8d776e70846bd"],["views/organization/workingdays.html","1087028d685891c3ece8e1fa44a824d9"],["views/private/home_branchmanager.html","e5d171b45604f24fdce967a218722148"],["views/private/home_default.html","ce571a58e38f082c14232e4dbc5b6757"],["views/private/home_funder.html","2d4df6dfa7c2e3241140d149108f31f1"],["views/private/home_superuser.html","7f6c9f5f9241f2267788431b3267a108"],["views/private/rich_dashboard.html","1914ea60e6307441d42099b2c3782ab4"],["views/products/charges.html","526d5a25f309078da8bd1f2ec8be2ac6"],["views/products/createcharge.html","5acace5c8b82a877c55f6f385d3c16de"],["views/products/createfixeddepositproduct.html","2bf033582b862be69e521f87ab8eb689"],["views/products/createinterestratechart.html","6b6028d275dbff8dad75172165f47854"],["views/products/createloanproduct.html","ba3ab0c35647126d3dd9ad3a9b1354e9"],["views/products/createrecurringdepositproduct.html","3f1c2c969cfff5009563d54abbd5d643"],["views/products/createsavingproduct.html","e9a2149bb2217bb95d32558239d982ab"],["views/products/createshareproduct.html","935f324e6a70575568088f9ef36ffc79"],["views/products/dividendlisting.html","ede649bcb0798ee033983f92d95d15aa"],["views/products/editcharge.html","d0dc7535223c44babad4faee62467748"],["views/products/editfixeddepositproduct.html","e63f6380eec102615461acf52e7aded9"],["views/products/editinterestratechart.html","ba91a4b0981cdb37453713b46a03f7e4"],["views/products/editloanproduct.html","498d0704350951b2bf39f7d2c9be621d"],["views/products/editrecurringdepositproduct.html","e3ae54a4d2dde48eba75d073062aa15e"],["views/products/editsavingproduct.html","f6a7b5002ae574d837bfc2530676b08e"],["views/products/editshareproduct.html","16934a91129fca17ef96086fc0627295"],["views/products/fixeddepositproducts.html","5dd481f27f3c33f14edb0692d9c6c699"],["views/products/floatingrates/CreateFloatingRate.html","ff718d98b73fc9c390dbbf8d5f3d3a51"],["views/products/floatingrates/EditFloatingRate.html","b3d87c625256cc494d42f04be7c42859"],["views/products/floatingrates/FloatingRates.html","8fed03ec3307f429a161a889b436f4d6"],["views/products/floatingrates/ViewFloatingRate.html","6cdee7f1389a4e3e3d53f56b85e5397a"],["views/products/interestratecharts.html","a742802628f592d207dcf5f5d8de9db6"],["views/products/loanproducts.html","1d524e9541ccd5992104f92fe76e2d96"],["views/products/productmix/addproductmix.html","d145a0e29351bf741372d253bf64f254"],["views/products/productmix/editproductmix.html","1066e402bc08d9f340e69681a10418be"],["views/products/productmix/productmix.html","d224359e73e417cda716ffa6e52d8eba"],["views/products/productmix/viewproductmix.html","b257a8d65c4851f1d02d5e7e14dd0bbd"],["views/products/products.html","8d350ad3935bf4549e6f370d36eb646f"],["views/products/recurringdepositproducts.html","1ce66363fff6d47c603f1ff28070ec48"],["views/products/savingproducts.html","ee8b9c72267dee37dc739a5d2dd45017"],["views/products/shareproductactions.html","ff9343b22e51e8574881780783700099"],["views/products/shareproducts.html","0514c5726b5d5a56e228df7ac820f0cc"],["views/products/tax/CreateTaxComponent.html","f465a88f3a4483ffc1919ab0e94f7232"],["views/products/tax/CreateTaxGroup.html","737faaa0ad777ee4e584156dbab75e4e"],["views/products/tax/EditTaxComponent.html","6d16798a3250af26110932bdd483b1d0"],["views/products/tax/EditTaxGroup.html","e86a2ea20daa48e9189cc338ab9817e5"],["views/products/tax/TaxComponents.html","d48add6ead442ec92933310352b10741"],["views/products/tax/TaxConfigurations.html","e7b14e6eb77275f2ae19f996282d34c5"],["views/products/tax/TaxGroups.html","b53e77a984e07c9f9bfc6fab8640b893"],["views/products/tax/ViewTaxComponent.html","79991cfb22d2d2044b9f962ba42cf7c1"],["views/products/tax/ViewTaxGroup.html","ee6b8fa6d85f2592073c893a32b2dae2"],["views/products/viewcharge.html","90f862bfeabad845258b3822b52dd434"],["views/products/viewdividends.html","5d060b75f7db5aaed878aa8587782b9b"],["views/products/viewfixeddepositproduct.html","ace2dc9a99032abd0f24a93c6f72156f"],["views/products/viewloanproduct.html","89a9d95462a2bcefcc53ec270b0ff6b2"],["views/products/viewrecurringdepositproduct.html","a44dbbe5a13ed20b7c54f61645baf2d1"],["views/products/viewsavingproduct.html","71fec9fc2964ef342d3d7524e9bee18e"],["views/products/viewshareproduct.html","e244b55f840363590d361c82ac87deaa"],["views/profile.html","67b3ece16f42be49d6d30e731372f72c"],["views/reports/run_reports.html","e5681c1457ae588ef4d300c1dac01c01"],["views/reports/view_reports.html","8e058389a21160e3bff6a06384379cc3"],["views/reports/xbrl.html","418120ef6fc1c3c48a3fee4732a0521a"],["views/reports/xbrlreport.html","d1a8f508016f8ebddc1d95722424b087"],["views/savings/addnewsavingscharge.html","8a76218d4f7104a60d92e13e27fad18f"],["views/savings/assignsavingsofficer.html","e03353faca13542b4bf0f08cef42ad78"],["views/savings/edit_saving_account_application.html","7668b98c6bd091abe32adbd567591779"],["views/savings/list_onhold_transactions.html","53b74421b56d3f6694c776146b4be7a8"],["views/savings/new_saving_account_application.html","7deb9b3e882df91f2bb99c7f314efd7a"],["views/savings/saving_account_actions.html","dfad66b77b0d5eeffbddaf28b5768bc8"],["views/savings/unassignsavingsofficer.html","d5b9f6a5d31569f2f0e814bdea7df52b"],["views/savings/view_saving_account_details.html","26316f0f73948029a43df102fe1bbab9"],["views/savings/view_saving_transaction.html","2f20be8063b12235f447e29f5c62568b"],["views/savings/viewsavingscharge.html","11cc3bd91a9608c13ba9be5f1fee9abd"],["views/search/advsearch.html","f12b19956370edcd59cf4b232e9cd326"],["views/search/glresults.html","86cfbbdfe87c74df212dabbe63e80dd9"],["views/shares/createshareaccount.html","09577c6f0e373304a4dd862c175eda59"],["views/shares/editshareaccount.html","856b26196e73d8e4c00315b03001772a"],["views/shares/shareaccountactions.html","183914dee84d0901e42903d80ec4cade"],["views/shares/viewshareaccount.html","ca6d385e829a7dccd1936d41d65692d8"],["views/start.html","8000fc89011846552cc95b1c7a9c949d"],["views/surveys/createsurvey.html","0ad0084e2bd694e994a51248224afeb3"],["views/surveys/surveys.html","488406e3e9790e086f2902f33f3b2d49"],["views/system/accountnumberpreferences.html","9abeb17d944f7a0dc04aa4c288b568ff"],["views/system/addaccountnumberpreferences.html","691067f3db96697af4333c8b0a62c561"],["views/system/addcode.html","0f29c955da06a9cc8a053e8ef748aeac"],["views/system/addhook.html","6c93e9e584d874ea930eea681a55e032"],["views/system/audit.html","ccc72481ed72def2c47790d156da3749"],["views/system/checkerActionPerformed.html","dc33c2f0d8b7475d0609943f375ef761"],["views/system/codes.html","b5fc04a7c55a1cf91910d446e2d313f9"],["views/system/createdatatable.html","6cfb4417a79122ab586f8d4c53a83f00"],["views/system/createreport.html","a38cafc3f93ff0c13a6cf33a85fa3694"],["views/system/datatables.html","0007ed09bee322bf99b0fe820f730193"],["views/system/editaccountnumberpreferences.html","b8ffaf9786958957cafdf3511e2af77d"],["views/system/editcode.html","8f867b417dd31cc2587e6a9c1b1fe7d0"],["views/system/editdatatable.html","05720943f1a3ba80cbda37951618acdc"],["views/system/edithook.html","4e706a2600356241c99f244c180f9ec9"],["views/system/editreport.html","bdeb1ab761bde3a16ee14e329e514bfb"],["views/system/editschedulerjob.html","cf51d51d637e3760ab423be0e0e5f7cf"],["views/system/entitytoentitymapping.html","6494236c202b784b0f1aff4e81b9c460"],["views/system/hooks.html","13fc84e00fcc5afa09366277ba7801cc"],["views/system/makedatatableentry.html","8b6b62d761b55b6ac70d0cad3d57ba27"],["views/system/reports.html","96d1b571734a35796fe279c6067a1c06"],["views/system/schedulerjobs.html","08816979cd04639de59dd0041f801c5e"],["views/system/viewMakerCheckerTask.html","96eab290506eb05e1088c16aa9098d50"],["views/system/viewaccountnumberpreferences.html","5025d5bbbf7b938fb52fedf714450374"],["views/system/viewaudit.html","2a175aca07999e3574fd031e780ba376"],["views/system/viewcheckerinbox.html","80bca2a1420de457aa55c4a6a7fc753d"],["views/system/viewcode.html","f70423fdf7a9f279a7a9ab0ebc43ca32"],["views/system/viewdatatable.html","b4ca21270832ecd24c7bf78e9cb2c11c"],["views/system/viewdatatableentry.html","3acb2430d728796850346a0ae0565d9b"],["views/system/viewhook.html","73dc9d183f6613cabd59d8e2e49b46a4"],["views/system/viewreport.html","e4ec6d46b6e29dcfed7108dd14bc30fb"],["views/system/viewschedulerjob.html","1e9220709949dd0783baa529bb63f2ec"],["views/system/viewschedulerjobhistory.html","dcca7c661443f4720a176556febbeefd"],["views/tasks.html","ac6289529af29b7dbe3c4a2f43d281ce"],["views/templates/createtemplate.html","3f35ccc4873caa76c0b022f4a8d97d09"],["views/templates/edittemplate.html","e69b054d5dc0da6bea74c08ea83d3367"],["views/templates/templates.html","ebe0c9a27c412d7b8938602766770b37"],["views/templates/viewtemplate.html","2fd10312fe21de95d20bf32a7760ff8d"]];
var cacheName = 'sw-precache-v3-Mifos-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = './index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("./bower_components/sw-toolbox/sw-toolbox.js","./sw-api.js");

