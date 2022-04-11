const baseURL = 'http://localhost:3333'

export function LOGIN_USER(body: object) {
  return {
    url: baseURL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function GET_USER(token: string) {
  return {
    url: baseURL + '/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function USER_CREATE(body: object) {
  return {
    url: baseURL + '/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_POST(formData: FormData, token: string) {
  return {
    url: baseURL + '/createPost',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  }
}
