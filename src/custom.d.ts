type RootState = {
  recordList: RecordItem[];
  createRecordError: Error | null;
  createTagError: Error | null;
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  type: string;
  tags: Tag[];
  notes: string;
  amount: number;
  createdAt?: string;
}
type Result = {
  title: string;
  total?: number;
  items: RecordItem[];
}[]
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}
