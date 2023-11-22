'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "86fe3b37dffe5745c767f26f5c817aa1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "5eefbfc91a22e7c7aed844d358e21165",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a2233b1d76e6fe2a29e80c3e13f0b52",
".git/logs/refs/heads/main": "6a2233b1d76e6fe2a29e80c3e13f0b52",
".git/logs/refs/remotes/origin/HEAD": "6a2233b1d76e6fe2a29e80c3e13f0b52",
".git/objects/pack/pack-3c274e9f6faf42f447c948ed776d9a44bb7c52eb.idx": "e6a36581b8d21adda4bdcc9426b9c8a6",
".git/objects/pack/pack-3c274e9f6faf42f447c948ed776d9a44bb7c52eb.pack": "d3b0e84a13c2c0a56efacbd17477f414",
".git/packed-refs": "a4daa36ec9120af4ee5368aff5f52469",
".git/refs/heads/main": "c746a25e7dcb54afabcbc6c5cea821aa",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
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
"assets/assets/images/ic_launcher_transparent.svg": "7bbe9b449c400bc42a3079cedbaacc43",
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
"assets/fonts/MaterialIcons-Regular.otf": "30c72291b3a5fb610cde08a88274f8df",
"assets/lib/backend/schema/structs/sorted_taxon_keys.json": "e0a3f118a674106af3e3b8aee5c6e913",
"assets/NOTICES": "988c9dec71a672b3198c112baa35c95f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "be77423a7137b72486d3e847a4e36d97",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"cors.json": "1631ee84498a1ddd40fcf9c0e77189d5",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/apple-touch-icon.png": "9b286a88b6ebf43eb01d9d8ece8781c4",
"icons/favicon.ico": "7c7ee75febe5bcdf19d36b79da810c67",
"icons/icon-192-maskable.png": "552cfd1543e4f3275531e2e56e3c1c31",
"icons/Icon-192.png": "6ae734bb910a6d92543f31f06678d39a",
"icons/icon-512-maskable.png": "152ef5060fb3aae9429e77082603c92e",
"icons/Icon-512.png": "4061845e6819bd9a529074d52cb195b4",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "83db7e287ee017de699964f2f81fa155",
"/": "83db7e287ee017de699964f2f81fa155",
"main.dart.js": "d9b8b67017b9c393900c48264997db24",
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
"assets/AssetManifest.json",
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
