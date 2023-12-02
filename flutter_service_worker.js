'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "52bbb0ed504c86c54ec7272fadd724f2",
".git/config": "b18d16f4241979451a4b4458044775da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "639d5f302d808ba8248fe5901bc0b60c",
".git/HEAD": "472e753e9720dbcefe1d87f83e0dc7f8",
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
".git/index": "f41a790af38ee50e3c890731f03ad255",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4819e41ac64f62dd24fee0137fb8532",
".git/logs/refs/heads/pre-alpha": "a4819e41ac64f62dd24fee0137fb8532",
".git/logs/refs/remotes/origin/HEAD": "0cfc4dc91aa0c19a06090597bc3fd87a",
".git/logs/refs/remotes/origin/pre-alpha": "a52d86b9b66908a1bfae81973ee5238f",
".git/objects/00/fcc7922e652c59e2d4d643003c41ba97b06b23": "0a067649e46346845a0846c1e1a405bd",
".git/objects/05/d5c79d16b078d2bc0a2cc7e14df9d28ca3fbb6": "c0dd9ce2c9f8399be26d669814dbda9d",
".git/objects/0b/46b4f482f0c3f047ee914a871bac7acbfcd785": "0e2f4a2da5d05bb9624b1877e8bb0faf",
".git/objects/12/4a7e8bb6a773eed109370a9457d67807d1434e": "6b9334b1e80ff89ffb316e36dc6f3251",
".git/objects/18/67ba303d539cbe617ec78fcebbc401b00e6b24": "0f8366dac826dbeb09798fa7fbaf77b1",
".git/objects/1a/6d9597a1c8b92856a0289058204c73efe7c002": "8af9df172b0fed95a8be1f163d28b251",
".git/objects/1b/00545acd6e74c6e6193400c5e251964776a998": "1ec14d7760e9a082dfcee50017876de2",
".git/objects/1b/f3640bc721f71ddb122cdfe0c1d9cee12eedf1": "572bdd011637ef204d196c6f8003286f",
".git/objects/1d/88205f2fae0622f9f985146a5efb6351b10607": "7ae43d2e1bc0274c3ceb18e88ee34e60",
".git/objects/1e/ede7c598286f04a278a8c66f3504c6589e4592": "6df131d830c9aff290c5465632c2b8b7",
".git/objects/24/afbee875e24779fbe5c6af24552d957ee5367a": "1cf2f2b708c796be15d85aa46f7a2afd",
".git/objects/25/8496b52d7d2aa13d7e30bac979216aa21597e6": "c0243cdcc00bedb810e49c690acc7619",
".git/objects/28/b04af75f4ba87e417a19402deab1951bb3bc0c": "51aa5f63620009f44b31b6ba7335a4f9",
".git/objects/2f/19218f0b33a750d60282cc21ab84970be899f6": "fa152b88070ae8ace7166cdac32da4e6",
".git/objects/38/ac9ea6ca68ae83a7ac632d0a3f7bf6d354db7c": "33c2a21c98187aedafd6afb6f2e0510b",
".git/objects/3b/2f692e6c22fd3998b750e28db355432e4999dd": "458bf86de4257cd0ba390124fc1f51af",
".git/objects/46/9792d484ce0e35de35b395aef981f8d7834375": "35e5e041f65d5f189127243258dba7c9",
".git/objects/4b/1724d4e6332cd290ccdb466db6524c798cb609": "e16c8fafe7c2f0523faf458d64a0d5ee",
".git/objects/53/1cab161a4f0d8c4ef22526f49e8307980d30e2": "29422497e6e4794d11b4ddc42834aeaa",
".git/objects/5c/e3794fa57e5b8ace7adaa9cc14030dc8b56dad": "cf668e5cd2efbf1c3ff91400e36c2532",
".git/objects/64/1c88da2b25a20f91e4ddd17e03285b3e5482bc": "13561d805bde619cfd2e5c8688fae71a",
".git/objects/67/c907da4efffe51a9a696f05ecb21ab81579498": "44d43507d4e0a911825fa80654365f82",
".git/objects/6c/b8ed87d63349f010bb8c2c4d208757802ded31": "6d104e3378b33e19bdc4cbae37e25fae",
".git/objects/75/ec20779cda5b31f6a3442b9d814a73cfd366e0": "99ccbc148bd6d0270e48812c48f6829e",
".git/objects/78/551e15612473c65ba49eef3490ea992b713174": "68f2ebb446f724395965c9b6817f45b7",
".git/objects/79/eaec8d31a27c49ba951b1f66319d825013dea9": "78e0c63d52b7e92bca48adbc74dc0c1b",
".git/objects/7e/c71394ee7183309a1d8006bab32a11642fde70": "56a92e570ec5a55ffe8f9a2f4faf6a1f",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8d/faa7c9118e5560a65e2ed074e5295c7dc796bf": "9319ab5ef5d0e091c761ff667327cefa",
".git/objects/90/cb3039e41379ea1e102d0a7b156e225a30d685": "89182576f23eb674c884ce7a1ee5b659",
".git/objects/93/47c41f3a2665a972654ef473b2120634b12c68": "888aa9015217b483be55405b838d8d4d",
".git/objects/95/13ae69467422b63e07387ed1427c2d5dd1db02": "71f26cd6cc9eb9c67bcf7a2208e0a9ef",
".git/objects/a1/784d0f7295664944077fd95707c554faf177d5": "f08e0bf2156de7aee7df38783fdbce86",
".git/objects/a5/ea842729b37df7c493f43a03ad470b506a8dd7": "2608b2db3abe4978fcff366cb3ba554e",
".git/objects/a9/2c917d53cb57491f957605a3f8bf55ed2a7357": "be6006d07bdf663f62eddede174d174e",
".git/objects/ac/1f1cd1895afa5b08c162c1b4a1d012d9e95470": "3234d6c3820813d3768432a8fc0195ed",
".git/objects/b2/c9ac7e5e0f57802aefd80656132010331ab7af": "93b99f63d483872108d43cd5b89d8cde",
".git/objects/c0/feae6132b2526ee39007ae1bb35e45f8ecbb51": "4f83483f9609a6d93cf6adbb2a87dc26",
".git/objects/c4/eab589d387041f6cb533f6fff7f4ff6dced10f": "bf43bd210776ffb4bdf8f5f3e8373e53",
".git/objects/c7/1ce12903db69be3cf4ced6e6640e335da237df": "f44d0ef83d0951c5c83a9795674e17ab",
".git/objects/c7/8b9e463297845393ef55892df161d60ea999c1": "99c53c8068ecf37331c3247ee0cfaeaf",
".git/objects/ce/871e93f0fc933cb2b0e2e0b1e5b1919eed0b64": "0e31fe389a1d59d480ef7e726f240750",
".git/objects/e0/bc80805afcde44c727bab9d2aaf21f62fc61b9": "2c2bb2901fdf1f70fdd5d15abceb2784",
".git/objects/e5/459d912ff334f738fb162fbe36c7f69ae4cb0b": "a7703382e23b709e369134f4a77125c9",
".git/objects/f4/bd999a1bf8965888c34131097dd7fa789b7e7c": "e38efa951b4b17cf98eedf381db64aba",
".git/objects/f5/2ecb587d894679eb03b61005b9d1a6d14bd6d0": "830c48a45274bf20e214f743afdf25a5",
".git/objects/fb/be98e831eada1e5bdc60778ab2e599dd88da35": "5c971d393652f8ff2fedee720f068432",
".git/objects/fd/9e8227107b7b434ecf0a36860f64b1252088d5": "ce638b493871363b1d9003d82ba1e44f",
".git/objects/fd/b70eafda4ae32d79fd31aba07a5db42afbc707": "027df29d78a123e0d2b8b68ffc704aa1",
".git/objects/ff/82c099cd997ba1166462d57dfb82558fe30095": "19442477ed97594115eca0bcc8f67daa",
".git/objects/pack/pack-b59bb716053009be006c8ac791459cfca2dcd140.idx": "995a186fbd92ea34a6d729f93ec11993",
".git/objects/pack/pack-b59bb716053009be006c8ac791459cfca2dcd140.pack": "acbb8cedb4fd431ccc6d001d05ba84c7",
".git/packed-refs": "b17f96dc835acbedfb4fb8f56da2dca0",
".git/refs/heads/pre-alpha": "1e01b67a5355471bfb3bd2f77f77f1d8",
".git/refs/remotes/origin/HEAD": "5fe35adc40052500eaf51952d89e9809",
".git/refs/remotes/origin/pre-alpha": "1e01b67a5355471bfb3bd2f77f77f1d8",
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
"assets/FontManifest.json": "0864da1b818cb2ca15dee06b7c181489",
"assets/fonts/MaterialIcons-Regular.otf": "9bf358226305ae3559326745ca4a22e2",
"assets/lib/backend/schema/structs/sorted_taxon_keys.json": "e0a3f118a674106af3e3b8aee5c6e913",
"assets/NOTICES": "4fe1811ed678274c56de9a5e12abe7ee",
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
"index.html": "3d0025a430a7b7240d3f32c03c0854ac",
"/": "3d0025a430a7b7240d3f32c03c0854ac",
"main.dart.js": "35405de17a56e4a935fa38f0dcd2a47b",
"manifest.json": "3c9615820cb591896c973dcf01dd7dec",
"README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"splash/img/dark-1x.png": "8a0a7a88f8e301acc32b8839a21ce2ae",
"splash/img/dark-2x.png": "a7bec2f705f4e45fb8df216fa366cea2",
"splash/img/dark-3x.png": "c0c9554abc686200f98086b7604bcc8a",
"splash/img/dark-4x.png": "bca9093b0eac8cec5172ec03816bf660",
"splash/img/light-1x.png": "8a0a7a88f8e301acc32b8839a21ce2ae",
"splash/img/light-2x.png": "a7bec2f705f4e45fb8df216fa366cea2",
"splash/img/light-3x.png": "c0c9554abc686200f98086b7604bcc8a",
"splash/img/light-4x.png": "bca9093b0eac8cec5172ec03816bf660",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/splash.json": "94ef7652293015cd6085b3a3c1695ec8",
"splash/style.css": "c2f679e259c7980d9a7e0420c18ab6e3",
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
