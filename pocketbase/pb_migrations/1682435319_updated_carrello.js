migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  // remove
  collection.schema.removeField("a2ektaw1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vbhibt6",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a2ektaw1",
    "name": "totale",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vbhibt6",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
