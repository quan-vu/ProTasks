package controllers

import (
	"encoding/json"
	models "github.com/quan-vu/ProTasks/backend/models"
)

func UserFromCtx(ctxUser interface{}) models.User {
    jsonString, _ := json.Marshal(ctxUser)	// convert map to json
    user := models.User{}					// convert json to struct
    json.Unmarshal(jsonString, &user)
	return user
}