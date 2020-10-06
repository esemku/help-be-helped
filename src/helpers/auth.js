import cookie from 'js-cookie'


// Set in cookie
export const setCookie = (key, value) => {
  if(window !== 'undefiend') {
    cookie.set(key, value, {
      // 1 Day
      expires: 1
    })
  }
}

// Remove from cookie
export const removeCookie = key => {
  if(window !== 'undefiend') {
    cookie.remove(key, {
      expires: 1
    })
  }
}

// Get from cookie
export const getCookie = key => {
  if(window !== 'undefiend') {
    return cookie.get(key)
  }
}

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if(window !== 'undefiend') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

// Remove from localstorage
export const removeLocalStorage = key => {
  if(window !== 'undefiend') {
    localStorage.removeItem(key)
  }
}

// Authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (token, user) => {
  console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE')
  setCookie('token', token)
  setLocalStorage('user', user)
}

// Access user info from localstorage
export const isAuth = () => {
  if(window !== 'undefiend') {
    const cookieChecked = getCookie('token')
    if(cookieChecked) {
      if(localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
      } else {
        return false
      }
    }
  }
}

export const signOut = () => {
  removeCookie('token')
  removeLocalStorage('user')
}

export const updateUser = (response, next) => {
  console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response)
  if(typeof window !== 'undefiend') {
    let auth = JSON.parse(localStorage.getItem('user'))
    auth = response.data
    localStorage.setItem('user', JSON.stringify(auth))
  }
  next()
}
