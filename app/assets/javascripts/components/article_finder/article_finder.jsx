import React from 'react';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';

import TextInput from '../common/text_input.jsx';
// import { getDataForCategory } from '../../utils/article_finder_utils.js';
import { fetchCategoryResults } from '../../actions/article_finder_action.js';
const ArticleFinder = createReactClass({
  getInitialState() {
    return {
      category: "",
      depth: "",
      min_views: "0",
      max_completeness: "100",
      isSubmitted: false,
      isSubmitting: false,
    };
  },

  updateFields(key, value) {
    const state = { ...this.state };
    state[key] = value;
    return this.setState(state);
  },

  searchCategory() {
    return this.props.fetchCategoryResults(this.state.category, this.state.depth);
  },

  render() {
    const category = (
      <TextInput
        id="category"
        onChange={this.updateFields}
        value={this.state.category}
        value_key="category"
        required
        editable
        label="Category"
        placeholder="Category"
      />);
    const depth = (
      <TextInput
        id="depth"
        onChange={this.updateFields}
        value={this.state.depth}
        value_key="depth"
        required
        editable
        label="Depth"
        placeholder="Depth"
      />);
    const minimumViews = (
      <TextInput
        id="min_views"
        onChange={this.updateFields}
        value={this.state.min_views}
        value_key="min_views"
        required
        editable
        label="Minimum Views"
        placeholder="Minimum Views"
      />);
    const maxCompleteness = (
      <TextInput
        id="max_completeness"
        onChange={this.updateFields}
        value={this.state.max_completeness}
        value_key="max_completeness"
        required
        editable
        label="Max Completeness(0-100)"
        placeholder="Completeness"
      />);
    return (
      <div className="container">
        <header>
          <h1 className="title">Article Finder</h1>
          <div>
            Let&#39;s find an article which fits your needs.
          </div>
        </header>
        {category}
        {depth}
        {minimumViews}
        {maxCompleteness}
        <button className="button dark" onClick={this.searchCategory}>Submit</button>
      </div>
      );
  }
});

const mapStateToProps = state => ({
  article: state.articleFinder.articles
});

const mapDispatchToProps = {
  fetchCategoryResults: fetchCategoryResults
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFinder);
