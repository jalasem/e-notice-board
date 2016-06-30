export class PostsService {
	getPosts() : Array<Object> {
		return [
      {
        "id" : "0001",
        "title" : "Faculty of CIS Examination Table",
        "featuredImage" : "",
        "hasImage" : false,
        "details" : "click on this post to download the 2nd Semester exam timetable",
        "postedBy" : "12/33HP055",
        "postedOn" : new Date(2016, 3, 12),
        "tags" : ["General", "Timetable", "PDF Doc."],
        "liked": false,
        "likedBy": [],
        "totalLikes" : 9,
        "shown"	: true,
        "authorizedToView" : true,
        "users_who_like_this" : [
          {
            "name" : "AbdulSamii",
            "nickname" : "Jalasem",
            "matric" : "12/55EE055",
            "when" : new Date (2016, 7, 23, 11, 23, 33)
          }
        ]
      },
      {
        "id" : "0002",
        "title" : "TCS 332 2nd C.A Result",
        "featuredImage" : "",
        "hasImage" : false,
        "details" : "TCS 332 2nd c.A result is out, check them here. \n You can direct any complaint to me \n Signed Ibrahim Ajagberan",
        "postedBy" : "13/52HP045",
        "postedOn" : new Date(2016, 6, 12),
        "tags" : ["TCS", "ICS", "Result", "PDF Doc."],
        "liked": false,
        "likedBy": [],
        "totalLikes" : 10,
        "shown"	: true,
        "authorizedToView" : true,
        "users_who_like_this" : []
      },
      {
        "id" : "0003",
        "title" : "LOST BUT FOUND",
        "featuredImage" : "",
        "hasImage" : false,
        "details" : "I found an HP small mouth charger at LR2, if you are the owner contact me on 08168861541",
        "postedBy" : "13/52HJ055",
        "postedOn" : new Date(2016, 6, 13),
        "tags" : ["General", "Lost but found"],
        "liked": false,
        "likedBy": [],
        "totalLikes" : 12,
        "shown"	: true,
        "authorizedToView" : true,
        "users_who_like_this" : []
      },
      {
        "id" : "0004",
        "title" : "LOST BUT FOUND",
        "featuredImage" : "",
        "hasImage" : false,
        "details" : "I misplaced my eye glasses in the faculty, if you help me find it pls contact me on 08035353672.",
        "postedBy" : "14/52HA055",
        "postedOn" : new Date(2016, 5, 17),
        "tags" : ["General", "Lost but found"],
        "liked": false,
        "likedBy": [],
        "totalLikes" : 5,
        "shown"	: true,
        "authorizedToView" : true,
        "users_who_like_this" : []
      },
      {
        "id" : "0005",
        "title" : "Strange structure found",
        "featuredImage" : "/images/cis.jpg",
        "hasImage" : true,
        "details" : "I found a faculty after Agric, it looks like this. Please I need info about the faculty. pls contact me on 08035353672.",
        "postedBy" : "13/52HJ055",
        "postedOn" : new Date(2016, 7, 19),
        "tags" : ["General"],
        "liked": false,
        "likedBy": [],
        "totalLikes" : 2,
        "shown"	: true,
        "authorizedToView" : true,
        "users_who_like_this" : []
      }
    ]
	}
}