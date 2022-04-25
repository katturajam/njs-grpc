const grpc = require('@grpc/grpc-js');
const PROTO_SERVICE_DESCRIPTOR_PATH = './protos/news.proto';
const protoLoader = require('@grpc/proto-loader');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_SERVICE_DESCRIPTOR_PATH, options);
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;

const client = new NewsService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

client.getAllNews({}, (error, news) => {
    if (error) throw error;
    console.log("GetAllNews", news);
});
  // add a news
  client.addNews(
    {
      title: "Title news 3",
      body: "Body content 3",
      postImage: "Image URL here",
    },
    (error, news) => {
      if (error) throw error;
      console.log("Successfully created a news.", news);
    }
  );
  
  // edit a news
  client.editNews(
    {
      id: "2",
      body: "Body content 2 edited.",
      postImage: "Image URL edited.",
      title: "Title for 2 edited.",
    },
    (error, news) => {
      if (error) throw error;
      console.log("Successfully edited a news.", news);
    }
  );
  
  // delete a news
  client.deleteNews(
    {
      id: 1,
    },
    (error, news) => {
      if (error) throw error;
      console.log("Successfully deleted a news item.", news);
    }
  );

  client.getAllNews({}, (error, news) => {
    if (error) throw error;
    console.log("GetAllNews", news);
});

client.getNews({ id: 63 }, (error, news) => {
    if (error) throw error;
    console.log("GetNews", news);
});