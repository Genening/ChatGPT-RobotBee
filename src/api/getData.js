import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl

// 获取模型列表
export const getModels = token => {
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/v1/models`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    const modelsObj=[]
    //获取所有的模型
    const models = [...new Set(res.data.data.map(model => model.id))].sort();
    models.forEach(model => {
      let modelObj={
        img: "",
        name: model,
        detail: "",
        lastMsg: model+"模型",
        id: model,
        headImg: require("@/assets/img/robotbee.png")
      }
      modelsObj.push(modelObj)
    });
    return modelsObj;
  })
}

// 完成对话指令
export const getChatCompletion = (params,token) => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/v1/chat/completions`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: params
  }).then(res => {
    console.log("chatgpt说")
    return res.data.choices[0].message.content;
  })
}


// 完成指令
export const getCompletion = (params,token) => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/v1/completions`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: params
  }).then(res => {
    return res.data.choices[0].text;
  })
}


// 根据提示创建图像
export const createImage = (params,token) => {
  console.log(params)
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/v1/images/generations`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: params
  }).then(res => {
    return res.data.data;
  })
}

// 根据创建图像变体
export const createImageVariations = (formData,token) => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/v1/images/variations`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data"'
    },
    data: formData
  }).then(res => {
    return res.data.data;
  })
}

// 将音频转换为文字
export const createTranscription = (formData,token) => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/v1/audio/transcriptions`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data"'
    },
    data: formData
  }).then(res => {
    return res.data;
  })
}

// 获取账号余额信息
export const getMoneyInfo= token => {
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/dashboard/billing/credit_grants`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log("chatgpt说")
    return res.data;
  })
}


  // 获取聊天信息
export const getChatMsg = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/friend/chatMsg`,
    data: params
  }).then(res => res.data)
}