type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  type: string;
  tags: string[];
  notes: string;
  amount: number;
  createdAt?: string;
}
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
