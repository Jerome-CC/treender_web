'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4ca54823be71145d9baa66be58d62c63",
".git/config": "86fe3b37dffe5745c767f26f5c817aa1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "95d680d7e30c89cdd35aca4069664374",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b4b4a71c8327827286810422cb015916",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfd55fe9aff2337130672188ae0e447f",
".git/logs/refs/heads/main": "cfd55fe9aff2337130672188ae0e447f",
".git/logs/refs/remotes/origin/HEAD": "8989cd1bd133ef1e16a7c2511c616003",
".git/logs/refs/remotes/origin/main": "c9d64958d67c1e8098dcfd3e707708cf",
".git/logs/refs/remotes/origin/pre-alpha": "78b9ce5bb03e3b8bffde7c6f956983c4",
".git/objects/01/51a587f192911f2e6fe851e97243d9fb1c86f0": "23002acbd47dba451be2cda84bbdaa64",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/414e7d8784767d03980b32e8de59c04202eda0": "c862d0d1c2ef34094e86e6f22652cf4c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/d579fc4180262c5d830adc6ca64aa7b2c39de1": "483bc770eb0d586e719c372ce7a2ab19",
".git/objects/08/94b1b5237cd391d90eb3f06e985fbaa2eb548f": "5045b2625ed8aa6e2407ac6c7b67617a",
".git/objects/08/d76e402c28a3d3eab258dfcf532893d0d0769c": "1f976681818a3f847ece4ba0b2ea94f6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/70b32c113bb520ecf72052e218b22174aee75d": "e68e3a5038bd038e12fed032fc4b2dce",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/1b203ed31b95b183040b6eae341a5113be1e76": "34206988bc016b938282e7d8d73aa3e8",
".git/objects/0c/6a57c06b4b97222347b7f729b7c182b129f19f": "f5aadf3992d1fd4adaed32cfbe904c99",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/10/55e70006e65a7b05eb1b5f9eedea3a1e120bcc": "5966811c6352b8bc10a01443ca6daa86",
".git/objects/11/8bbc446919a677220f0fd35c87b69ad528beae": "dd9a47d72b25978376255d6bc930b650",
".git/objects/17/adf00026af3fa753a6f061e5dc32a178b91b1a": "b2f6ab01daba4ea1c02788cc98cc3dd6",
".git/objects/1a/44ec4e564715661bc22bf33f6df731d8c66ba1": "3075454053c2767fa55c24650a18a882",
".git/objects/1b/02ba11cd83bfa9d7c9eec1446e81005f6504c2": "e38f9e36dd9937c69676f9999ae3b755",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1e/f199e9153a580ea105cca6896d954acbc35f63": "5d664e48ed24353a57318228db8ae2d5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/eee3a3cb263b647d2b7341030de5fcd829bfa6": "703ab4dc7dcce6b229415ef5a049781d",
".git/objects/27/6e48bd3d7d9ea568d53fc64e2a0b4cff49ec49": "b748899210a80458c85a2f814adcd753",
".git/objects/29/7f65e07ce1f3d018ecc50180e7ff8e1ccbfb37": "beee940efa25886f90a9d5da20d4601c",
".git/objects/29/b3be0bee1a169a36361b1db24e8896b02e21ae": "2892aaf8b754cc620f747e220e56086d",
".git/objects/2d/37bc312e526630427bb42b85d13a956d1caeb7": "097890d08210c193e94262fe9c2ca0ad",
".git/objects/2d/e465c3ede62586da6c1f09e2324ea424d2b628": "b48e8214503ffe1dfce315984c5b9b80",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/30/686e554b6ae12fa9ae857d5d5e2e31cb17ddf3": "5a083d22062b6dad3ea9e63e43e339b6",
".git/objects/32/1d8a65eafcc3781831d1ec484da22694fd61dd": "6502396489afb37816dd828c2a1efbde",
".git/objects/33/d3bf5771e5d7ad7101ab7d024c033f7066b519": "a66865ca0140c1498fe3a3808d516ed1",
".git/objects/37/bba8bde246b320a555106c56556aed6fdd177e": "4f52fd325396cd6a5b6605bf2efdc74b",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/a3d2f807a1bdc5309fc56224069b0a2401d4ef": "2774fc206ea5b44f04dae155ff4085e7",
".git/objects/3b/dade74bffbba6f741f1109f1cbb37a5c90f36a": "053e718b7892ab208a50e0a75a5aefd8",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3c/f3bcde1494574211e2099ea9eb36b1efedb4c8": "6455da82b6921fc605b32aaec8fdc78a",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/6f2baac80754915fc565d67103d120985c58f2": "0d190c84606618d6a9132bed0322bf4b",
".git/objects/49/de4295f3e977fca20d79f999e51c0e54a1266c": "ac3c4259eb384ab75972b208770e9d64",
".git/objects/49/ef23a49adf0d7caa60d11af649dee4667ff8ff": "7ad195bf2d6cad323a7ca7785ac0a450",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/77f6d5dcd1a307711394b70b7b66674384aed9": "df503cb00a8c1a5cb6c35f9cfd5e90ee",
".git/objects/5e/a5159fd3a83415866799663c79f9e69264f7f5": "be44a475ae33d9504bebc426493a1bc1",
".git/objects/5e/b827c1377bcf02232539c1496f3cc6479a6134": "26abb009dff5ca06b3a31421a72bf7b5",
".git/objects/61/9e01043f0560b098d30272f23342fb25151312": "4e565bb2478f0753f132cf1f0e3826cf",
".git/objects/61/c0b11977f2bf725ba31566d26a11297bf52e0f": "c6b39e0401500a0d2652a9d7ae588be7",
".git/objects/67/71d664d6354f3437bf572e5c5f191d2f0618a6": "8b5d57f5a9cf949b069f90b8cd1bca77",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/e61a6bd12f45c38bc5424e88d31f4bfbf342ce": "bfac03481477a2d4fddbf5917a40e419",
".git/objects/6b/29fb43126a063616c11a2be1f0283671bb3a6f": "245e68a21c3c5855f363982c01484292",
".git/objects/6c/51bdedffa94083f30c78ede26f604f9d44e9dd": "db18951d9a1141dad59de0e04a26b52e",
".git/objects/6f/ae889b67bbefb1865f46eda08639527279643b": "a236f0ea3b214a47bba4436638154cf7",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/bc763b09f886f034851c97a091e4556d23bf65": "e7d77881fa644462054cfa816327718a",
".git/objects/79/3bec1044e664dc40452e8ba2c16e9e8412a335": "bb89f12079ba18f0a3ed53a054b4bed0",
".git/objects/79/64d21412612ef28333325ec833b245d056334b": "87a5b8f5e32145fef6712c747e09a9f2",
".git/objects/79/a30c68c248ccb523b5338785e49b14226add6e": "ac91205da331588fc20f5cb6aefb0fcb",
".git/objects/7c/3fe9e37ba50c240f4f9dc1bda7790197cc4b9b": "ac50e3f854d1bcf5dd811083651cffee",
".git/objects/7e/d712263fd59bde245ed1f17c15b0a356f6fb2a": "bbc9fff6a359ed2e8e56c07308c01d2f",
".git/objects/81/6c20f6d58d81297df75e5cbc06d37ef8ce9c62": "7d4a7854fd5431f6ff8c47203991bd94",
".git/objects/82/7be4ed241451b317117e9ed6647f6473de7315": "0980f43fdb9ad49ddc04235b5196df02",
".git/objects/84/7912c344679cfa93933969a005c913f081d82d": "b59d155d60a66c11fc699783f96ccbe0",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/a289b010a30675dca262114f3832c1c59fe8a1": "e8f3299b958d0726d938760aa822e00d",
".git/objects/88/0bb7cc8e30d147f934aad41c3eb73641d545a5": "fa03f4a478e8898df641d3cc7a464a26",
".git/objects/8a/0534d276380b4e49deadbc2f30faffaaf8ed4f": "c891d36dd146926cf1f8c9847993f612",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bcf15912a589ac2172edb4135f4c58369d8132": "6f21cb1e1da55b5cefc671dcc8fb39d2",
".git/objects/8a/d54856cbd7360732ced2e4da5d884aad74395a": "1a1555fccaac8c9f954aa311dc65d075",
".git/objects/8b/a9947bbbf102c4317342d93e0c666f4e3f068c": "f8d777cc52c4fb889bc3a5234bbc850f",
".git/objects/8b/c48abc2d83352a31b8b8423d0ab6bf90439ee4": "1ecaa63e28ff28d6de40f66481152dec",
".git/objects/8f/311e65300ea9fed138f3f87882d78488e38bda": "36262a548927b0b9829bc5865d1e7371",
".git/objects/92/ec3f1adef2cb8cfe04334c8744ac1ccb7d09dc": "f7ce407df92ab87018cfa1d204e0ddfc",
".git/objects/93/353b355c75cc648d8b6ba83d750050a255c375": "e54115eaa6c70aa1594764afb2b37560",
".git/objects/95/7dda39851c911ab6efd5aa3824b07d5ad34be3": "61eb4dddf55fe20a450ed9853fedf429",
".git/objects/9e/36b922b7a358a60d459e6e45fab3cdb1706dd9": "823cb44802e4494b9a26e120c080291e",
".git/objects/a1/a4e568841be8e24ccc14f6361e4a01edbcd24c": "0c1761f0a8acd7acef01629b34401bda",
".git/objects/a5/370ec90ad24d6eda47688d1aec3be2e04e05f3": "548266c2fc708c52ae6015c6f02774a9",
".git/objects/ac/24e3392e15204fe5fb92a9244a8b11f2ecf05e": "75cca77843c4d400f63a4c56acb6fc5c",
".git/objects/ad/9189c99dc3b768381eafa525552cda55da0d46": "5a3620d013f00a75cf4a8f661f142d71",
".git/objects/ae/bc4d947c37f67809b16d225ad4bf8179cdff69": "28eec22653267ad7c8c880aac65bd044",
".git/objects/ae/dec731803b1d3a8b8b696e395e538882679645": "ae377c8f3f3e984379ff1fe07cc50fcb",
".git/objects/b3/7067b74711fca512f46dc06ec678781eaa3412": "91f0ceb4a1d75ba48d2d377b6b21531f",
".git/objects/b4/501767eb0fa183384e319316b463eb2be4fece": "4f06ec74c89a5d36dc17ef1caa51defb",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/e0d690da337018936905b56d6de1918fde0f4d": "2312b00100cd85db388d8a3d76980337",
".git/objects/be/fac6cf665739fe790581f2f6f6f21e9863d015": "c73121da47ef7d996e07244f57d174af",
".git/objects/c1/20059df2113d7feedb022e9e6e2fb7dfd5926e": "7420e068328c98993e213d57498dd9a8",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/e942eafee08849800afaec412073507ab7eb99": "ce4cd7f9c8f7cc99d434c42b4038f12e",
".git/objects/c9/bc9a9429e1b6b4fdea0189dec31b068c6bdd18": "55bc1b2c0cbff223e1f8fb1f23b3be57",
".git/objects/ce/e02f5b8a064b796284c0fe478ea835737912e7": "8a521e1837fd18765e80d81a0e0b2506",
".git/objects/d0/01103079b65c8bf858807c20829c18cfb3c213": "cb7a9cbaa5881587be50b164fde5563d",
".git/objects/d5/e362eeefba5596d29aa3030254d518dc21aa61": "0ce1133b160af6298d6303d8fb5f48ab",
".git/objects/d7/184c212048ce8fbf195c8ade0718916ca52a58": "31710d2a3855c6297580856bfd8e9cdf",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/7ccb034fd42e4a57c3eab3a86a3a80b0065aa5": "b5632597d4c412ac0f6b64ef409eafdb",
".git/objects/db/a5fb7b190a89e87c3e67269bff02a42d024028": "45021838f64cadb8ed4c9dd5987e4072",
".git/objects/df/19ef5942c5b5c2b2bf441c87d54eaed98eac01": "8306211359adb895bdedb35af164a415",
".git/objects/df/955926568c2c179c42519e85c91efa1911eca6": "ea66b5fcf96f3cd3be1fd646f57c8d46",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e5/34f962fa11e49c2d2d395bf77891648e21a37f": "8743601c3ccd880b86b3fb2007d02296",
".git/objects/e6/7324ff24419e981c05e204cde2bf957de96f4e": "19155b1ffb02e8e69cfb549ade0c576b",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/33deed3829166260e42175d0bc9edf5466f18b": "6005b183ca8f8f54503ecd36b1ebfde2",
".git/objects/e9/35d72c0c5cad09acce680240c98f83745aaf2e": "9d080441fa68af1b498154ac5703ff16",
".git/objects/ea/1e6bbd4d487840eab69b8786321c766a83d9e3": "b54dcec90a67c6b254ac7318caac259e",
".git/objects/ea/e05b8e356a559262599f896fdfd041ccb84c4f": "7dd2db0029a6a72d3a01fc59f4afe9b2",
".git/objects/eb/741672e01d27cc267ed49b7b552052b89c8836": "7bef4315c05392f0a4ce7d9ff7f00f39",
".git/objects/eb/b59d4f05e6d85525a0eb2c0d0d7d5cb68f521b": "690c2aa6d159423d3009287438fa472f",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/5c8ef08005e32ec95882a661227d4d03e23e42": "4a17d65be7b9f42ac64fd35a15b5e210",
".git/objects/f2/d4a7bd1f61be12ace5cbe7112eca8fbd42d432": "ad1986f56feaa1d76ef3b2568e3b6f5f",
".git/objects/f4/79f4270e3ba3c79728e4808f6229d077594c12": "f075b3f7acb8591b32d7934190071b17",
".git/objects/f7/50ecf2d462b4ed0d2c24d6b595e6af38452f8c": "581cc1fb95f0526ff2e846f01a2ff087",
".git/objects/f8/c5ffd073261fb1f6303f9154478ded1251ed8f": "dce291e46c7a6912d86c1f0fc67e7007",
".git/objects/f9/96c592581467c558372ebcbea019bce881be7a": "8f4b737ed4282107d1f770d3d412b4a5",
".git/objects/fb/041d0555aea5a7026447b8642fdeab66a8cdfd": "6eddc05d46ccef26ececb90d6b2aa875",
".git/objects/fc/712f24ddafba89bb960737f9c0b1d3865f4273": "cb9b9ccf6e8374e054a34117336fb6dd",
".git/objects/pack/pack-3c274e9f6faf42f447c948ed776d9a44bb7c52eb.idx": "e6a36581b8d21adda4bdcc9426b9c8a6",
".git/objects/pack/pack-3c274e9f6faf42f447c948ed776d9a44bb7c52eb.pack": "d3b0e84a13c2c0a56efacbd17477f414",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "9d16fc91b4f40a267b3ae0a9e5c59244",
".git/refs/remotes/origin/HEAD": "5fe35adc40052500eaf51952d89e9809",
".git/refs/remotes/origin/main": "9d16fc91b4f40a267b3ae0a9e5c59244",
".git/refs/remotes/origin/pre-alpha": "bb85b11b3b28046a9f834af8a816250b",
"assets/AssetManifest.bin": "524b8d55ae18ca159a9346d0c521955b",
"assets/AssetManifest.bin.json": "dfbd9160f589e89d39aa987d0f1aa7ac",
"assets/AssetManifest.json": "4a37ac615e0a99c07e4cdbff1214a709",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/44d5affe-78d4-4e41-9550-bb24a24546de.woff2": "0cd8685a658126a039d16c655c1b69d3",
"assets/assets/fonts/59bcf951-4249-4187-a639-c34e15807969.woff": "4a4455588c0a5d3804118e2e41fa90ec",
"assets/assets/fonts/absolut/absolut%2520w05%2520thin%2520upright%2520italic.otf": "c386af5f55cae4cf75d03079ae1bcd52",
"assets/assets/fonts/absolut/absolut-book-upright-italic.otf": "7674f17887b28f8a7b9e1a3595b76555",
"assets/assets/fonts/absolut/absolut_extra_light.otf": "f41b93b745f811598cbb1320a3d9c8c5",
"assets/assets/fonts/absolut/absolut_semi_bold.otf": "25d4322edc74b0f8abd06aff6a33b844",
"assets/assets/fonts/absolut/absolut_thin.otf": "38ce7d5cd126f5a2aa89fdc44c8f4854",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/futura/Futura%2520Book%2520font.ttf": "f9f02ed05aa86534c3842d44cb20d6c4",
"assets/assets/fonts/futura/futura%2520medium%2520bt.ttf": "ee64fb9d3f1ba2333e1b489283925bce",
"assets/assets/fonts/futura/futura%2520medium%2520condensed%2520bt.ttf": "bf7355bace7a3ec77c064c2a2c70750e",
"assets/assets/fonts/futura/Futura-CondensedLight.otf": "78b46aef67d27ef145b0a3948995968f",
"assets/assets/fonts/linotypereducta-maisfontes.b19a.zip": "910af6dd42d254da9677818f88a444f3",
"assets/assets/fonts/OnlineWebFonts_COM_0de79f98650a04c8d17cacc0bd0c191d.zip": "7e01672367ef5ccc686272929fcf2ecc",
"assets/assets/fonts/reducta.ttf": "91b58226e40be70b27dfeb05dac26bd8",
"assets/assets/fonts/Romeo%2520FB%2520Cond%2520Medium.otf": "a5f9aee4799f885baf17345602a92483",
"assets/assets/fonts/Romeo%2520Regular.ttf": "bc07fcd67a6dd7137aeacd1a188e0d4c",
"assets/assets/fonts/treender_icons/TreenderIcons.ttf": "7d81666ee833091548416223997f209a",
"assets/assets/fonts/Trumpit.otf": "20a6312f97ea92efc33f9e7a034eb9df",
"assets/assets/images/favicon.png": "27cccefbc610a2f6aaf35f0c2050e53c",
"assets/assets/images/ic_launcher_transparent.svg": "38be2c0a533b102b72b2594ecafef4db",
"assets/assets/images/next_image.svg": "6d81aa9c0940ff3600321812a42ce4ca",
"assets/assets/images/previous_image.svg": "4c86e06bcad2b48f07388f488ba1371a",
"assets/assets/lottie_animations/animation1.json": "0d31d33fc9f0e904c9aa1a14b751f556",
"assets/assets/lottie_animations/animation2.json": "47f169abb89d9aeb7bfef35e6bbe0d9d",
"assets/assets/lottie_animations/animation3.2.json": "94ef7652293015cd6085b3a3c1695ec8",
"assets/assets/lottie_animations/animation3.json": "94ef7652293015cd6085b3a3c1695ec8",
"assets/assets/lottie_animations/anim_vide.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lottie_animations/config.json": "0d31d33fc9f0e904c9aa1a14b751f556",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "021f8d735224cd00e995e75849ef1dbb",
"assets/fonts/MaterialIcons-Regular.otf": "9bf358226305ae3559326745ca4a22e2",
"assets/lib/backend/schema/structs/sorted_taxon_keys.json": "e0a3f118a674106af3e3b8aee5c6e913",
"assets/NOTICES": "7b89febff4eac3fb20dd15d33bb5a279",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ccb07f9501080527bbb4f5001af168c7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "52699b49aa67316d1d5c41dbc6fcebab",
"canvaskit/canvaskit.wasm": "028d34fce7142a2c2e614bfe2d38b3bf",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "509750b12143dc83eb2ce94db3e803c7",
"canvaskit/chromium/canvaskit.wasm": "15fc408f7ac36b0f8b3b59818f0bec81",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f4547f77f7e30fe3ed27bad64065449f",
"canvaskit/skwasm.wasm": "3dc7377060b01843eee7f4b43d1ea150",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"cors.json": "1631ee84498a1ddd40fcf9c0e77189d5",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/apple-touch-icon.png": "9b286a88b6ebf43eb01d9d8ece8781c4",
"icons/favicon.ico": "7c7ee75febe5bcdf19d36b79da810c67",
"icons/icon-192-maskable.png": "552cfd1543e4f3275531e2e56e3c1c31",
"icons/Icon-192.png": "6ae734bb910a6d92543f31f06678d39a",
"icons/icon-512-maskable.png": "152ef5060fb3aae9429e77082603c92e",
"icons/Icon-512.png": "4061845e6819bd9a529074d52cb195b4",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "bc7851135bb31139e90a1262f7ad2c3f",
"/": "bc7851135bb31139e90a1262f7ad2c3f",
"main.dart.js": "9201f28ab3b04dcbd081f7974c046c29",
"manifest.json": "3c9615820cb591896c973dcf01dd7dec",
"README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"splash/img/dark-1x.png": "6a825ca6bcc6fe31bfc9b21d6fd3d888",
"splash/img/dark-2x.png": "1d949591e59de2e46e06748d8de4bce0",
"splash/img/dark-3x.png": "4224833cef412ecac32cc00b0256adb3",
"splash/img/dark-4x.png": "369cca3b6175b89366d56b8467aefe03",
"splash/img/light-1x.png": "6a825ca6bcc6fe31bfc9b21d6fd3d888",
"splash/img/light-2x.png": "1d949591e59de2e46e06748d8de4bce0",
"splash/img/light-3x.png": "4224833cef412ecac32cc00b0256adb3",
"splash/img/light-4x.png": "369cca3b6175b89366d56b8467aefe03",
"splash/splash.json": "94ef7652293015cd6085b3a3c1695ec8",
"splash/style.css": "8933c6b9b0ba44f67ae7472f9866bad5",
"version.json": "6af855f80ac327fa491884a21a1868d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
