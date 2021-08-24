package controllers

import (
	"github.com/gin-gonic/gin"
	models "github.com/quan-vu/ProTasks/backend/models"
	services "github.com/quan-vu/ProTasks/backend/services"
	resources "github.com/quan-vu/ProTasks/backend/resources"
)

type AuthController struct {
	AuthService services.AuthService
}

func ProvideAuthController(service services.AuthService) AuthController {
	return AuthController{AuthService: service}
}

func (ctrl *AuthController) Signup(c *gin.Context) {
	var user models.User
	err := c.BindJSON(&user)
	if err != nil {
		ResponseError(c, 500, err.Error())
	}

	user, err = ctrl.AuthService.Signup(user)
	if err != nil {
		ResponseError(c, 500, "Some thing went wrong")
	}

	ResponseJSON(c, resources.ToAuthSignupResource(user))
}

func (ctrl *AuthController) Login(c *gin.Context) {
	var user models.User
	err := c.BindJSON(&user)
	if err != nil {
		ResponseError(c, 500, err.Error())
	}

	user, err = ctrl.AuthService.Login(user)
	if err != nil {
		ResponseError(c, 500, "Some thing went wrong")
	}

	ResponseJSON(c, resources.ToAuthSignupResource(user))
}
