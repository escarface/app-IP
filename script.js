const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3182bb2a4emshb96b3f59e5de06ep1e054ajsn62adc4e69ce1',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};


const fetchIpInfo = ip => {
  return fetch (`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
  .then( res => res.json())
  .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

  $submit.setAttribute('disabled','')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await  fetchIpInfo(value)
  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')

})






