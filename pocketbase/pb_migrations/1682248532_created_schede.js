migrate((db) => {
  const collection = new Collection({
    "id": "2o6br33h1z85bep",
    "created": "2023-04-23 11:15:32.911Z",
    "updated": "2023-04-23 11:15:32.911Z",
    "name": "schede",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iunj2y2d",
        "name": "scheda",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "application/msword",
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "usnonmka",
        "name": "inizio",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "5keyb02u",
        "name": "fine",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "azpqsoc5",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2o6br33h1z85bep");

  return dao.deleteCollection(collection);
})
