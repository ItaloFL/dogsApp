const baseURL = 'http://localhost:3333'

type PaginationType = {
  skip: number
  take: number
}

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

export function PHOTOS_GET({ skip, take }: PaginationType) {
  console.log(skip, take)
  return {
    url: baseURL + `/post?skip=${skip}&take=${take}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
}

export function PHOTO_GET(id: string) {
  return {
    url: baseURL + `/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function COMMENT_POST(postId: string, body: object) {
  return {
    url: baseURL + `/coment/${postId}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    }
  }
}

export function DELETE_PHOTO(id: string) {
  return {
    url: baseURL + `/post/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
}
