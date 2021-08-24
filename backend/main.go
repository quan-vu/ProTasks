package main

import (
	"github.com/quan-vu/ProTasks/backend/app"
)

func main() {
	app := new(app.APP)
	app.Initialize()
	app.Serve()
}
