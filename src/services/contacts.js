import axios from "axios"

//_____
const getResponseData = ({ data }) => data
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://fullstack-phonebook-api.onrender.com/contacts'
    : 'http://localhost:3002/contacts'

//_____
const getAll = () => (
  axios
    .get(baseUrl)
    .then(getResponseData)
)

//_____
const create = newObject => (
  axios
    .post(baseUrl, newObject)
    .then(getResponseData)
)

//_____
const replaceNumber = (targetId, newNumber) => (
  axios
    .patch(`${baseUrl}/${targetId}`, { number: newNumber })
    .then(getResponseData)
)

//_____
const remove = targetId => (
  axios
    .delete(`${baseUrl}/${targetId}`)
    .then(getResponseData)
)

//_____
export default {
  getAll,
  create,
  replaceNumber,
  remove,
}