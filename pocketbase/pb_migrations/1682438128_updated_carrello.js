migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  collection.createRule = null

  return dao.saveCollection(collection)
})
