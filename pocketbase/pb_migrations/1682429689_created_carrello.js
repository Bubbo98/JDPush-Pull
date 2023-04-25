migrate((db) => {
  const collection = new Collection({
    "id": "0wwh6ajmmz0xcko",
    "created": "2023-04-25 13:34:49.916Z",
    "updated": "2023-04-25 13:34:49.916Z",
    "name": "carrello",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "tenm56ci",
        "name": "prodotti",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0wwh6ajmmz0xcko");

  return dao.deleteCollection(collection);
})
