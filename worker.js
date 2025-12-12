addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Docker's official download URL
  const DOCKER_DOWNLOAD_BASE = 'https://download.docker.com'
  
  // Parse the incoming request URL
  const url = new URL(request.url)
  
  // Extract the path and query parameters
  const dockerPath = url.pathname
  const queryParams = url.search

  // Construct the full target URL
  const targetUrl = `${DOCKER_DOWNLOAD_BASE}${dockerPath}${queryParams}`

  // Create a new request to the Docker download server
  const fetchOptions = {
    method: request.method,
    headers: request.headers,
    body: request.body
  }

  try {
    // Fetch the resource from Docker's download server
    const response = await fetch(targetUrl, fetchOptions)

    // Create a new response with CORS headers to allow broad access
    const responseHeaders = new Headers(response.headers)
    responseHeaders.set('Access-Control-Allow-Origin', '*')
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type')

    // Return the proxied response
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    })
  } catch (error) {
    // Handle any errors during the fetch
    return new Response(`Proxy Error: ${error.message}`, { status: 500 })
  }
}