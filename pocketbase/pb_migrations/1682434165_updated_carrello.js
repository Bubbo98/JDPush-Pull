migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  collection.listRule = null

  return dao.saveCollection(collection)
})
