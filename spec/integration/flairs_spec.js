const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/flairs/";
const sequelize = require("../../src/db/models/index").sequelize;
const Flair = require("../../src/db/models").Flair;

describe("routes : flairs", () => {

//#2
    beforeEach((done) => {
      this.flair;
      sequelize.sync({force: true}).then((res) => {

       Flair.create({
         name: "rain",
         color: "pink"
       })
        .then((flair) => {
          this.flair = flair;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      });

    });//beforeEach

  //  });

  describe("GET /flairs", () => {

    it("should return a status code 200 and all flairs", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("rain");
        done();
      });
    });
  });

  describe("GET /flairs/new", () => {

  it("should render a new form",(done) => {
    request.get(`${base}new`,(err,res,body) => {
      expect(err).toBeNull;
    //  console.log(body); was done for resolving a error
      expect(body).toContain("New Flair");
      done();
    });
  });
});//GET /topic/new close
});//describe routes:flairs