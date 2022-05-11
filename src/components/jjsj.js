const data = [{id: 14, name: 'Fantasy'},{id: 28, name: 'Action'},{id: 12, name: 'Adventure'}
]
console.log(data.length)
let videos={"results":[{"iso_639_1":"en","iso_3166_1":"US","name":"Official Trailer",
"key":"5f9VcZqxFO4","site":"YouTube","size":1080,"type":"Trailer","official":true,"published_at":"2021-12-16T14:05:25.000Z",
"id":"61bb4afd6a300b001d91146f"},{"iso_639_1":"en","iso_3166_1":"US","name":"Trailer","key":"awHyqJv3WKE","site":"YouTube",
"size":1080,"type":"Trailer",
"official":true,"published_at":"2021-12-16T14:05:12.000Z","id":"61bb5102873f000042b8c0ac"}]}

let vll = videos['results'][0]['key']
console.log(vll)