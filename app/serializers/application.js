import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  serializeAttribute: function(snapshot, json, key, attribute) {
    if (attribute.options && attribute.options.readOnly) {
      return;
    }
    this._super(...arguments);
  }
});
