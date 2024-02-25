const htmlParser = (data: string) => (
  <div dangerouslySetInnerHTML={{ __html: data }}></div>
);

export default htmlParser;
